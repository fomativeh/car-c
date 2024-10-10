export type Work = {
    carName: string;
    workDone: string;
  };
  
  export type CaseType = {
    category: string;
    imageCategory: string;
    works: Work[];
  };
  
  export const cases: CaseType[] = [
    {
      category: "Car Wrapping",
      imageCategory: "wrap",
      works: [
        {
          carName: "Audi A6",
          workDone: "We completely transformed this Audi A6 by wrapping it in a matte black finish. The result? A sleek, stylish look that protects the original paint."
        },
        {
          carName: "Lexus IS",
          workDone: "This Lexus IS was wrapped in a gloss red finish, giving it a bold, eye-catching appearance that stands out on the road."
        },
        {
          carName: "BMW M3",
          workDone: "We applied a carbon fiber wrap to this BMW M3’s hood, achieving a performance-inspired look with superior paint protection."
        },
        {
          carName: "Tesla Model S",
          workDone: "For this Tesla Model S, we did a satin white wrap, transforming its sleek design into a clean, minimalist masterpiece."
        },
        {
          carName: "Mercedes-Benz C-Class",
          workDone: "We gave this C-Class a matte gray finish, elevating its luxury feel while safeguarding the car’s original paintwork."
        },
        {
          carName: "Porsche 911",
          workDone: "This Porsche 911 got a full-body wrap in metallic blue, providing a dazzling look while ensuring durability and protection."
        }
      ]
    },
    {
      category: "Performance Tuning",
      imageCategory: "tune",
      works: [
        {
          carName: "Subaru WRX",
          workDone: "We enhanced this Subaru WRX’s performance with a complete ECU remap, improving horsepower and fuel efficiency."
        },
        {
          carName: "Nissan GT-R",
          workDone: "Installed a new turbocharger on this GT-R, significantly increasing its power output for track-level performance."
        },
        {
          carName: "Ford Mustang",
          workDone: "Performed an exhaust upgrade on this Ford Mustang, resulting in a deeper, more aggressive sound and improved airflow."
        },
        {
          carName: "Audi RS7",
          workDone: "This Audi RS7 received a comprehensive tune, optimizing its engine for better throttle response and top-end power."
        },
        {
          carName: "Chevrolet Camaro",
          workDone: "Added a cold air intake to this Camaro, improving engine breathing and delivering noticeable performance gains."
        },
        {
          carName: "BMW 340i",
          workDone: "Upgraded this BMW’s suspension system, giving it better handling and cornering abilities on both road and track."
        }
      ]
    },
    {
      category: "Window Tinting",
      imageCategory: "tint",
      works: [
        {
          carName: "Honda Accord",
          workDone: "Applied a 20% privacy tint to this Honda Accord’s windows, offering both a sleek look and increased UV protection."
        },
        {
          carName: "Toyota Corolla",
          workDone: "Installed UV protection films on this Toyota Corolla, reducing interior fading and keeping the cabin cooler."
        },
        {
          carName: "Mazda CX-5",
          workDone: "For this Mazda CX-5, we applied a custom tint that balances style with privacy and heat reduction."
        },
        {
          carName: "Jeep Wrangler",
          workDone: "Tinted this Jeep Wrangler’s windows with a dark film to enhance privacy and reduce glare while off-roading."
        },
        {
          carName: "Chevrolet Tahoe",
          workDone: "We gave this Chevrolet Tahoe a darker tint level for enhanced privacy and a more intimidating road presence."
        },
        {
          carName: "Ford Explorer",
          workDone: "Applied 35% tint on this Ford Explorer’s windows, adding a touch of style while ensuring full compliance with local laws."
        }
      ]
    },
    {
      category: "Custom Body Kits",
      imageCategory: "kit",
      works: [
        {
          carName: "Dodge Charger",
          workDone: "We installed an aggressive body kit on this Dodge Charger, giving it a bold, muscular appearance with enhanced aerodynamics."
        },
        {
          carName: "Hyundai Veloster",
          workDone: "Fitted a custom body kit on this Hyundai Veloster, achieving a sporty, rally-inspired design."
        },
        {
          carName: "Ford Focus ST",
          workDone: "Added a sleek, low-profile body kit to this Focus ST, enhancing both its looks and performance."
        },
        {
          carName: "Mitsubishi Lancer Evo",
          workDone: "Installed a performance body kit on this Evo, making it track-ready with improved downforce and style."
        },
        {
          carName: "Volkswagen Golf R",
          workDone: "Gave this Golf R an aggressive body kit with front and rear diffusers for a more commanding road presence."
        },
        {
          carName: "Honda Civic Type R",
          workDone: "We installed a custom body kit on this Civic Type R, boosting both its aerodynamics and aggressive look."
        }
      ]
    }
  ];
  