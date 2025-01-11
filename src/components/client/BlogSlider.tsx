"use client"

import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import Blog_Card from "@/components/ui/Blog_Card";

interface Blog {
    _id: number;
    banner_image: string;
    category: string;
    name: string;
    meta_description: string;
    meta_title: string;
    meta_tags: string;
    added_by: string;
    read_time: string;
    blog_short_content1: string;
    blog_content: string;
    banner_content: string;
    tags: [];
    routename: string
    views: number
    createdAt: string
    updatedAt: string
    status: string
}

interface BlogCarouselProps {
    blogs: Blog[];
}
export const BlogSlider = ({ blogs }: BlogCarouselProps) => {
    const CARD_WIDTH = 350;
    const MARGIN = 20;
    const CARD_SIZE = CARD_WIDTH + MARGIN;
    const BREAKPOINTS = {
        sm: 640,
        lg: 1024,
    };

    const [ref, { width }] = useMeasure();
    const [offset, setOffset] = useState(0);

    const CARD_BUFFER =
        width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

    const CAN_SHIFT_LEFT = offset < 0;
    const CAN_SHIFT_RIGHT =
        Math.abs(offset) < CARD_SIZE * (blogs.length - CARD_BUFFER);

    const shiftLeft = () => {
        if (!CAN_SHIFT_LEFT) return;
        setOffset((prev) => prev + CARD_SIZE);
    };

    const shiftRight = () => {
        if (!CAN_SHIFT_RIGHT) return;
        setOffset((prev) => prev - CARD_SIZE);
    };
    return (
        <div ref={ref}>
            <div className="flex items-center justify-between mb-4">
                <button
                    className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${CAN_SHIFT_LEFT ? "" : "opacity-30"
                        }`}
                    disabled={!CAN_SHIFT_LEFT}
                    onClick={shiftLeft}
                >
                    <FiArrowLeft />
                </button>
                <button
                    className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${CAN_SHIFT_RIGHT ? "" : "opacity-30"
                        }`}
                    disabled={!CAN_SHIFT_RIGHT}
                    onClick={shiftRight}
                >
                    <FiArrowRight />
                </button>
            </div>
            <motion.div
                animate={{ x: offset }}
                transition={{ ease: "easeInOut" }}
                className="flex"
            >
                {blogs.map((post) => (
            <Blog_Card key={post._id} {...post} />
          ))}
            </motion.div>
        </div>
    )
}