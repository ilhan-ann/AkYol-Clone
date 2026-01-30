export interface CategoryItem {
  key: string;
  children?: CategoryItem[];
}

export const categories: CategoryItem[] = [
  {
    key: "personal_computers",
    children: [
      { key: "all_in_one_pcs" },
      {
        key: "laptops_ultrabooks",
        children: [
          { key: "gaming_laptops" },
          { key: "ultrabooks" }
        ]
      },
      { key: "displays" }
    ]
  },
  {
    key: "pc_equipment",
    children: [
      { key: "cpu" },
      {
        key: "coolers",
        children: [
          {
            key: "cpu_cooler",
            children: [
              { key: "air_coolers" }, // пример сабсаб
              { key: "liquid_coolers" }
            ]
          },
          {
            key: "liquid_cooling",
            children: [
              { key: "single_loop" },
              { key: "custom_loop" }
            ]
          },
          { key: "case_cooler" },
          { key: "other" }
        ]
      },
      { key: "motherboards" },
      { key: "ssd" },
      { key: "internal_hdd" },
      { key: "dvd_rw" },
      { key: "graphics_cards" },
      { key: "power_supplies" },
      { key: "pc_cases_no_psu" },
      { key: "pc_cases_with_psu" },
      { key: "expansion_devices" }
    ]
  },
  {
    key: "peripherals_accessories",
    children: [
      { key: "keyboards" },
      { key: "mice" },
      { key: "headsets" },
      { key: "webcams" }
    ]
  },
  {
    key: "network_equipment",
    children: [
      { key: "routers" },
      { key: "switches" },
      { key: "wifi_adapters" },
      { key: "network_cables" }
    ]
  },
  {
    key: "storages_usb",
    children: [
      { key: "usb_flash" },
      { key: "external_hdd" },
      { key: "memory_cards" }
    ]
  },
  {
    key: "smartphones_gadgets",
    children: [
      { key: "smartphones" },
      { key: "smart_watches" },
      { key: "power_banks" }
    ]
  },
  {
    key: "audio_systems",
    children: [
      { key: "headphones" },
      { key: "speakers" },
      { key: "microphones" }
    ]
  },
  {
    key: "tv_multimedia",
    children: [
      { key: "televisions" },
      { key: "tv_boxes" },
      { key: "projectors" }
    ]
  },
  {
    key: "home_appliances",
    children: [
      { key: "kitchen_appliances" },
      { key: "climate_devices" },
      { key: "vacuum_cleaners" }
    ]
  },
  {
    key: "consoles_games",
    children: [
      { key: "game_consoles" },
      { key: "game_controllers" },
      { key: "video_games" }
    ]
  },
  {
    key: "computer_chairs_tables",
    children: [
      { key: "gaming_chairs" },
      { key: "office_chairs" },
      { key: "computer_tables" }
    ]
  },
  {
    key: "for_kids",
    children: [
      { key: "educational_toys" },
      { key: "kids_tablets" }
    ]
  },
  {
    key: "security_systems",
    children: [
      { key: "cctv_cameras" },
      { key: "alarm_systems" },
      { key: "video_recorders" }
    ]
  },
  {
    key: "car_appliances",
    children: [
      { key: "car_chargers" },
      { key: "dash_cameras" },
      { key: "car_audio" }
    ]
  },
  {
    key: "automation",
    children: [
      { key: "smart_home" },
      { key: "sensors" }
    ]
  },
  {
    key: "tools_equipment",
    children: [
      { key: "hand_tools" },
      { key: "measuring_devices" }
    ]
  }
];
