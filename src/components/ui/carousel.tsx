import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";

type CarouselCtx = {
  embla: EmblaCarouselType | null;
  selectedIndex: number;
  scrollSnaps: number[];
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  isScale: boolean;
};

const CarouselContext = createContext<CarouselCtx | null>(null);

function useCarousel() {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error("Carousel components must be used within <Carousel />");
  return ctx;
}

type CarouselProps = {
  options?: EmblaOptionsType;
  isScale?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Carousel({
  options,
  isScale = false,
  className = "",
  children,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  
  useEffect(() => {
  if (!emblaApi) return;

  const api = emblaApi;

  const sync = () => {
    setScrollSnaps(api.scrollSnapList());
    setSelectedIndex(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  };

  
  const raf = requestAnimationFrame(sync);

  
  api.on("select", sync);
  api.on("reInit", sync);

  return () => {
    cancelAnimationFrame(raf);
    api.off("select", sync);
    api.off("reInit", sync);
  };
}, [emblaApi]);

  const value = useMemo<CarouselCtx>(
    () => ({
      embla: emblaApi ?? null,
      selectedIndex,
      scrollSnaps,
      canScrollPrev,
      canScrollNext,
      scrollPrev: () => emblaApi?.scrollPrev(),
      scrollNext: () => emblaApi?.scrollNext(),
      scrollTo: (i: number) => emblaApi?.scrollTo(i),
      isScale,
    }),
    [emblaApi, selectedIndex, scrollSnaps, canScrollPrev, canScrollNext, isScale]
  );

  return (
    <CarouselContext.Provider value={value}>
      <div className={className}>
        {/* Viewport */}
        <div ref={emblaRef} className="overflow-hidden">
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  );
}


type SliderChildProps = {
  index?: number;
};

export function SliderContainer({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const withIndex = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;

    // Only inject "index" into elements that accept it (safe & no-any)
    return React.cloneElement(child as React.ReactElement<SliderChildProps>, {
      index,
    });
  });

  return (
    <div className={`flex items-stretch gap-4 md:gap-6 ${className}`}>
      {withIndex}
    </div>
  );
}


export function Slider({
  className = "",
  children,
  index,
}: {
  className?: string;
  children: React.ReactNode;
  index?: number;
}) {
  const { selectedIndex, isScale } = useCarousel();
  const active = typeof index === "number" ? index === selectedIndex : false;

  const scaleClass = isScale
    ? active
      ? "scale-100 opacity-100"
      : "scale-[0.94] opacity-80"
    : "scale-100 opacity-100";

  return (
    <div
      className={[
        "shrink-0",
        "transition-transform duration-500 ease-out",
        "origin-center",
        scaleClass,
        className,
      ].join(" ")}
      aria-current={active ? "true" : undefined}
    >
      {children}
    </div>
  );
}

export function SliderPrevButton({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { canScrollPrev, scrollPrev } = useCarousel();
  return (
    <button
      type="button"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={className}
      aria-label="Previous slide"
    >
      {children}
    </button>
  );
}

export function SliderNextButton({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { canScrollNext, scrollNext } = useCarousel();
  return (
    <button
      type="button"
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={className}
      aria-label="Next slide"
    >
      {children}
    </button>
  );
}

export function SliderDotButton({
  className = "",
}: {
  className?: string;
}) {
  const { scrollSnaps, selectedIndex, scrollTo } = useCarousel();

  return (
    <div className={["flex items-center gap-2", className].join(" ")}>
      {scrollSnaps.map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => scrollTo(i)}
          className={[
            "h-2 w-2 rounded-full transition",
            i === selectedIndex ? "bg-primary" : "bg-border",
          ].join(" ")}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === selectedIndex ? "true" : undefined}
        />
      ))}
    </div>
  );
}