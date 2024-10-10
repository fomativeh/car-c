export type Product = {
    title?: string;
    imageCategory?: string;
    description?: string;
    subServices?: string[];
    ctaButton?: string;
};

export const productsData: Product[] = [
    {
        title: "Car Wrapping",
        imageCategory: "wrap",
        description:
            "Give your car a brand-new look with our premium car wrapping services. Choose from a variety of colors, textures, and finishes, including gloss, matte, and carbon fiber.",
        subServices: ["Full-body wrap", "Partial wrap (e.g., hood or roof)", "Custom designs"],
    },
    {
        title: "Window Tinting",
        imageCategory: "tint",
        description:
            "Protect your car’s interior, reduce glare, and add privacy with our professional window tinting services. We offer various levels of tinting for your preferences.",
        subServices: ["UV protection films", "Privacy tinting", "Custom tint levels"],
    },
    {
        title: "Performance Tuning",
        imageCategory: "tune",
        description:
            "Unlock the full potential of your vehicle with our expert performance tuning services. We optimize engine power, fuel efficiency, and more to give you an unbeatable driving experience.",
        subServices: ["ECU remapping", "Exhaust upgrades", "Turbo installations"],
    },
    {
        title: "Custom Body Kits",
        imageCategory: "kit",
        description:
            "Stand out with our custom-designed body kits that add a unique flair to your vehicle. Whether you’re after a sleek, aerodynamic look or aggressive styling, we have you covered.",
        subServices: ["Front/rear bumpers", "Side skirts", "Spoilers"],
    },
    {
        title: "Car Detailing",
        imageCategory: "detail",
        description:
            "Keep your car looking brand new with our professional detailing services. From paint correction to ceramic coatings, we ensure every inch of your vehicle shines.",
        subServices: ["Interior detailing", "Paint protection", "Ceramic coating"],
    }
];
