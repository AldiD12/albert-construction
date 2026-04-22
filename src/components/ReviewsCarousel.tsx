"use client";

import { useState } from "react";
import { reviews, averageRating, reviewCount } from "@/data/reviews";

const REVIEWS_PER_PAGE = 3;

export function ReviewsCarousel() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const start = page * REVIEWS_PER_PAGE;
  const visible = reviews.slice(start, start + REVIEWS_PER_PAGE);

  return (
    <section className="bg-surface-container-low py-20 md:py-28 mb-20 md:mb-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight text-center">
          What Our Customers Say
        </h2>
        <p className="text-center text-charcoal mb-12 max-w-xl mx-auto">
          Every review below is from a verified Checkatrade customer.{" "}
          <span className="text-secondary font-bold">{averageRating}/10</span> overall from{" "}
          {reviewCount} reviews.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 min-h-[320px]">
          {visible.map((review, i) => (
            <div
              key={`${page}-${i}`}
              className="bg-white rounded-xl p-7 shadow-sm border border-outline-variant/20 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="font-headline font-black text-2xl text-secondary">
                  {review.rating}/10
                </span>
                {review.verified && (
                  <span className="font-label text-[10px] uppercase tracking-widest text-secondary flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Verified
                  </span>
                )}
              </div>
              <h3 className="font-headline font-bold text-primary mb-3 leading-snug">
                {review.title}
              </h3>
              <p className="text-charcoal text-sm leading-relaxed mb-5 flex-1">
                {review.text}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
                <p className="font-label text-xs text-muted">
                  {review.jobLocation}
                </p>
                <p className="font-label text-xs text-muted">
                  {new Date(review.date).toLocaleDateString("en-GB", {
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          {/* Prev / Next buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous reviews"
              className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary transition-all hover:bg-primary hover:text-white disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              aria-label="Next reviews"
              className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary transition-all hover:bg-primary hover:text-white disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            {/* Page indicator */}
            <span className="font-label text-xs text-muted ml-1">
              {page + 1} / {totalPages}
            </span>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`rounded-full transition-all ${
                  i === page
                    ? "w-6 h-2.5 bg-secondary"
                    : "w-2.5 h-2.5 bg-outline-variant hover:bg-secondary/50"
                }`}
              />
            ))}
          </div>

          {/* Checkatrade link */}
          <a
            href="https://www.checkatrade.com/trades/albertconstructionltd"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label font-bold text-primary text-sm hover:text-secondary transition-colors underline underline-offset-4 decoration-secondary hidden sm:block"
          >
            All {reviewCount} reviews →
          </a>
        </div>

        {/* Mobile checkatrade link */}
        <div className="text-center mt-6 sm:hidden">
          <a
            href="https://www.checkatrade.com/trades/albertconstructionltd"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label font-bold text-primary text-sm hover:text-secondary transition-colors underline underline-offset-4 decoration-secondary"
          >
            All {reviewCount} reviews on Checkatrade →
          </a>
        </div>

      </div>
    </section>
  );
}
