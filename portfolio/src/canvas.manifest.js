export const manifest = {
  screens: {
    scr_f0b8wr: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_6h5crc: { name: "About", route: "/about", position: { "x": 1560, "y": 220 } },
    scr_yrq9dz: { name: "Services", route: "/services", position: { "x": 2960, "y": 220 } },
    scr_0pz4og: { name: "Projects", route: "/projects", position: { "x": 4360, "y": 220 } },
    scr_l6pfs5: { name: "Contact", route: "/contact", position: { "x": 5760, "y": 220 } }
  },
  sections: {
    sec_40y2av: { name: "Main Navigation", x: 0, y: 0, width: 7120, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_40y2av", children: [
    { kind: "screen", id: "scr_f0b8wr" },
    { kind: "screen", id: "scr_6h5crc" },
    { kind: "screen", id: "scr_yrq9dz" },
    { kind: "screen", id: "scr_0pz4og" },
    { kind: "screen", id: "scr_l6pfs5" }]
  }]

};