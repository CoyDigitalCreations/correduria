import React, { useState } from "react"

type Layout = "fixed" | "intrinsic" | "responsive" | "fill"

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string
    width?: number
    height?: number
    layout?: Layout
    priority?: boolean
    objectFit?: React.CSSProperties["objectFit"]
    objectPosition?: React.CSSProperties["objectPosition"]
    className?: string
}

export default function Image({
    src,
    width,
    height,
    layout = "intrinsic",
    priority,
    objectFit = "cover",
    objectPosition = "50% 50%",
    alt,
    className,
    ...rest
}: ImageProps) {
    const [isLoaded, setIsLoaded] = useState(false)

    const handleLoad = () => {
        setIsLoaded(true);
    };

    // Estilos base
    const baseStyle: React.CSSProperties = {
        objectFit,
        objectPosition,
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0,
    };

    // Estilos según el layout
    const layoutStyles: React.CSSProperties =
        layout === "fill" ? {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        } : layout === "responsive" ? {
            width: "100%",
            height: "auto",
        } : layout === "fixed" ? {
            width,
            height,
        } : {
            // intrinsic - default
            maxWidth: "100%",
            height: "auto",
        };

    return (
        <div
            className={`relative ${className || ''}`}
            style={
                layout === "responsive" && width && height ? {
                    width: '100%',
                    paddingBottom: `${(height / width) * 100}%`,
                    position: 'relative',
                } : layout === "fill" ? {
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                } : undefined
            }
        >
            {/* Placeholder de carga */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-[#41475f] border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Imagen real */}
            <img
                {...rest}
                src={src}
                width={layout === "fill" ? undefined : width}
                height={layout === "fill" ? undefined : height}
                loading={priority ? "eager" : "lazy"}
                onLoad={handleLoad}
                alt={alt}
                className={`
                    ${layout === "fill" || layout === "responsive" ? "absolute top-0 left-0 w-full h-full" : ""}
                    ${className || ""}
                    `}
                style={{
                    ...baseStyle,
                    ...layoutStyles,
                }}
            />
        </div>
    )
}