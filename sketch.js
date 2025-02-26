// Array of all 118 elements with their properties
let elements = [
  { atomicNumber: 1, symbol: "H", name: "Hydrogen", mass: 1.008, group: 1, period: 1, category: "non-metal", state: "gas", col: 0, row: 0 },
  { atomicNumber: 2, symbol: "He", name: "Helium", mass: 4.0026, group: 18, period: 1, category: "noble gas", state: "gas", col: 17, row: 0 },
  { atomicNumber: 3, symbol: "Li", name: "Lithium", mass: 6.94, group: 1, period: 2, category: "alkali metal", state: "solid", col: 0, row: 1 },
  { atomicNumber: 4, symbol: "Be", name: "Beryllium", mass: 9.0122, group: 2, period: 2, category: "alkaline earth metal", state: "solid", col: 1, row: 1 },
  { atomicNumber: 5, symbol: "B", name: "Boron", mass: 10.81, group: 13, period: 2, category: "metalloid", state: "solid", col: 12, row: 1 },
  { atomicNumber: 6, symbol: "C", name: "Carbon", mass: 12.011, group: 14, period: 2, category: "non-metal", state: "solid", col: 13, row: 1 },
  { atomicNumber: 7, symbol: "N", name: "Nitrogen", mass: 14.007, group: 15, period: 2, category: "non-metal", state: "gas", col: 14, row: 1 },
  { atomicNumber: 8, symbol: "O", name: "Oxygen", mass: 15.999, group: 16, period: 2, category: "non-metal", state: "gas", col: 15, row: 1 },
  { atomicNumber: 9, symbol: "F", name: "Fluorine", mass: 18.998, group: 17, period: 2, category: "halogen", state: "gas", col: 16, row: 1 },
  { atomicNumber: 10, symbol: "Ne", name: "Neon", mass: 20.180, group: 18, period: 2, category: "noble gas", state: "gas", col: 17, row: 1 },
  { atomicNumber: 11, symbol: "Na", name: "Sodium", mass: 22.990, group: 1, period: 3, category: "alkali metal", state: "solid", col: 0, row: 2 },
  { atomicNumber: 12, symbol: "Mg", name: "Magnesium", mass: 24.305, group: 2, period: 3, category: "alkaline earth metal", state: "solid", col: 1, row: 2 },
  { atomicNumber: 13, symbol: "Al", name: "Aluminum", mass: 26.982, group: 13, period: 3, category: "post-transition metal", state: "solid", col: 12, row: 2 },
  { atomicNumber: 14, symbol: "Si", name: "Silicon", mass: 28.085, group: 14, period: 3, category: "metalloid", state: "solid", col: 13, row: 2 },
  { atomicNumber: 15, symbol: "P", name: "Phosphorus", mass: 30.974, group: 15, period: 3, category: "non-metal", state: "solid", col: 14, row: 2 },
  { atomicNumber: 16, symbol: "S", name: "Sulfur", mass: 32.06, group: 16, period: 3, category: "non-metal", state: "solid", col: 15, row: 2 },
  { atomicNumber: 17, symbol: "Cl", name: "Chlorine", mass: 35.45, group: 17, period: 3, category: "halogen", state: "gas", col: 16, row: 2 },
  { atomicNumber: 18, symbol: "Ar", name: "Argon", mass: 39.948, group: 18, period: 3, category: "noble gas", state: "gas", col: 17, row: 2 },
  { atomicNumber: 19, symbol: "K", name: "Potassium", mass: 39.098, group: 1, period: 4, category: "alkali metal", state: "solid", col: 0, row: 3 },
  { atomicNumber: 20, symbol: "Ca", name: "Calcium", mass: 40.078, group: 2, period: 4, category: "alkaline earth metal", state: "solid", col: 1, row: 3 },
  { atomicNumber: 21, symbol: "Sc", name: "Scandium", mass: 44.956, group: 3, period: 4, category: "transition metal", state: "solid", col: 2, row: 3 },
  { atomicNumber: 22, symbol: "Ti", name: "Titanium", mass: 47.867, group: 4, period: 4, category: "transition metal", state: "solid", col: 3, row: 3 },
  { atomicNumber: 23, symbol: "V", name: "Vanadium", mass: 50.942, group: 5, period: 4, category: "transition metal", state: "solid", col: 4, row: 3 },
  { atomicNumber: 24, symbol: "Cr", name: "Chromium", mass: 51.996, group: 6, period: 4, category: "transition metal", state: "solid", col: 5, row: 3 },
  { atomicNumber: 25, symbol: "Mn", name: "Manganese", mass: 54.938, group: 7, period: 4, category: "transition metal", state: "solid", col: 6, row: 3 },
  { atomicNumber: 26, symbol: "Fe", name: "Iron", mass: 55.845, group: 8, period: 4, category: "transition metal", state: "solid", col: 7, row: 3 },
  { atomicNumber: 27, symbol: "Co", name: "Cobalt", mass: 58.933, group: 9, period: 4, category: "transition metal", state: "solid", col: 8, row: 3 },
  { atomicNumber: 28, symbol: "Ni", name: "Nickel", mass: 58.693, group: 10, period: 4, category: "transition metal", state: "solid", col: 9, row: 3 },
  { atomicNumber: 29, symbol: "Cu", name: "Copper", mass: 63.546, group: 11, period: 4, category: "transition metal", state: "solid", col: 10, row: 3 },
  { atomicNumber: 30, symbol: "Zn", name: "Zinc", mass: 65.38, group: 12, period: 4, category: "transition metal", state: "solid", col: 11, row: 3 },
  { atomicNumber: 31, symbol: "Ga", name: "Gallium", mass: 69.723, group: 13, period: 4, category: "post-transition metal", state: "solid", col: 12, row: 3 },
  { atomicNumber: 32, symbol: "Ge", name: "Germanium", mass: 72.630, group: 14, period: 4, category: "metalloid", state: "solid", col: 13, row: 3 },
  { atomicNumber: 33, symbol: "As", name: "Arsenic", mass: 74.922, group: 15, period: 4, category: "metalloid", state: "solid", col: 14, row: 3 },
  { atomicNumber: 34, symbol: "Se", name: "Selenium", mass: 78.971, group: 16, period: 4, category: "non-metal", state: "solid", col: 15, row: 3 },
  { atomicNumber: 35, symbol: "Br", name: "Bromine", mass: 79.904, group: 17, period: 4, category: "halogen", state: "liquid", col: 16, row: 3 },
  { atomicNumber: 36, symbol: "Kr", name: "Krypton", mass: 83.798, group: 18, period: 4, category: "noble gas", state: "gas", col: 17, row: 3 },
  { atomicNumber: 37, symbol: "Rb", name: "Rubidium", mass: 85.468, group: 1, period: 5, category: "alkali metal", state: "solid", col: 0, row: 4 },
  { atomicNumber: 38, symbol: "Sr", name: "Strontium", mass: 87.62, group: 2, period: 5, category: "alkaline earth metal", state: "solid", col: 1, row: 4 },
  { atomicNumber: 39, symbol: "Y", name: "Yttrium", mass: 88.906, group: 3, period: 5, category: "transition metal", state: "solid", col: 2, row: 4 },
  { atomicNumber: 40, symbol: "Zr", name: "Zirconium", mass: 91.224, group: 4, period: 5, category: "transition metal", state: "solid", col: 3, row: 4 },
  { atomicNumber: 41, symbol: "Nb", name: "Niobium", mass: 92.906, group: 5, period: 5, category: "transition metal", state: "solid", col: 4, row: 4 },
  { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", mass: 95.95, group: 6, period: 5, category: "transition metal", state: "solid", col: 5, row: 4 },
  { atomicNumber: 43, symbol: "Tc", name: "Technetium", mass: 98, group: 7, period: 5, category: "transition metal", state: "solid", col: 6, row: 4 },
  { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", mass: 101.07, group: 8, period: 5, category: "transition metal", state: "solid", col: 7, row: 4 },
  { atomicNumber: 45, symbol: "Rh", name: "Rhodium", mass: 102.91, group: 9, period: 5, category: "transition metal", state: "solid", col: 8, row: 4 },
  { atomicNumber: 46, symbol: "Pd", name: "Palladium", mass: 106.42, group: 10, period: 5, category: "transition metal", state: "solid", col: 9, row: 4 },
  { atomicNumber: 47, symbol: "Ag", name: "Silver", mass: 107.87, group: 11, period: 5, category: "transition metal", state: "solid", col: 10, row: 4 },
  { atomicNumber: 48, symbol: "Cd", name: "Cadmium", mass: 112.41, group: 12, period: 5, category: "transition metal", state: "solid", col: 11, row: 4 },
  { atomicNumber: 49, symbol: "In", name: "Indium", mass: 114.82, group: 13, period: 5, category: "post-transition metal", state: "solid", col: 12, row: 4 },
  { atomicNumber: 50, symbol: "Sn", name: "Tin", mass: 118.71, group: 14, period: 5, category: "post-transition metal", state: "solid", col: 13, row: 4 },
  { atomicNumber: 51, symbol: "Sb", name: "Antimony", mass: 121.76, group: 15, period: 5, category: "metalloid", state: "solid", col: 14, row: 4 },
  { atomicNumber: 52, symbol: "Te", name: "Tellurium", mass: 127.60, group: 16, period: 5, category: "metalloid", state: "solid", col: 15, row: 4 },
  { atomicNumber: 53, symbol: "I", name: "Iodine", mass: 126.90, group: 17, period: 5, category: "halogen", state: "solid", col: 16, row: 4 },
  { atomicNumber: 54, symbol: "Xe", name: "Xenon", mass: 131.29, group: 18, period: 5, category: "noble gas", state: "gas", col: 17, row: 4 },
  { atomicNumber: 55, symbol: "Cs", name: "Cesium", mass: 132.91, group: 1, period: 6, category: "alkali metal", state: "solid", col: 0, row: 5 },
  { atomicNumber: 56, symbol: "Ba", name: "Barium", mass: 137.33, group: 2, period: 6, category: "alkaline earth metal", state: "solid", col: 1, row: 5 },
  { atomicNumber: 57, symbol: "La", name: "Lanthanum", mass: 138.91, group: 3, period: 6, category: "lanthanide", state: "solid", col: 2, row: 5 },
  { atomicNumber: 58, symbol: "Ce", name: "Cerium", mass: 140.12, group: 3, period: 6, category: "lanthanide", state: "solid", col: 0, row: 7 },
  { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", mass: 140.91, group: 3, period: 6, category: "lanthanide", state: "solid", col: 1, row: 7 },
  { atomicNumber: 60, symbol: "Nd", name: "Neodymium", mass: 144.24, group: 3, period: 6, category: "lanthanide", state: "solid", col: 2, row: 7 },
  { atomicNumber: 61, symbol: "Pm", name: "Promethium", mass: 145, group: 3, period: 6, category: "lanthanide", state: "solid", col: 3, row: 7 },
  { atomicNumber: 62, symbol: "Sm", name: "Samarium", mass: 150.36, group: 3, period: 6, category: "lanthanide", state: "solid", col: 4, row: 7 },
  { atomicNumber: 63, symbol: "Eu", name: "Europium", mass: 151.96, group: 3, period: 6, category: "lanthanide", state: "solid", col: 5, row: 7 },
  { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", mass: 157.25, group: 3, period: 6, category: "lanthanide", state: "solid", col: 6, row: 7 },
  { atomicNumber: 65, symbol: "Tb", name: "Terbium", mass: 158.93, group: 3, period: 6, category: "lanthanide", state: "solid", col: 7, row: 7 },
  { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", mass: 162.50, group: 3, period: 6, category: "lanthanide", state: "solid", col: 8, row: 7 },
  { atomicNumber: 67, symbol: "Ho", name: "Holmium", mass: 164.93, group: 3, period: 6, category: "lanthanide", state: "solid", col: 9, row: 7 },
  { atomicNumber: 68, symbol: "Er", name: "Erbium", mass: 167.26, group: 3, period: 6, category: "lanthanide", state: "solid", col: 10, row: 7 },
  { atomicNumber: 69, symbol: "Tm", name: "Thulium", mass: 168.93, group: 3, period: 6, category: "lanthanide", state: "solid", col: 11, row: 7 },
  { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", mass: 173.05, group: 3, period: 6, category: "lanthanide", state: "solid", col: 12, row: 7 },
  { atomicNumber: 71, symbol: "Lu", name: "Lutetium", mass: 174.97, group: 3, period: 6, category: "lanthanide", state: "solid", col: 13, row: 7 },
  { atomicNumber: 72, symbol: "Hf", name: "Hafnium", mass: 178.49, group: 4, period: 6, category: "transition metal", state: "solid", col: 3, row: 5 },
  { atomicNumber: 73, symbol: "Ta", name: "Tantalum", mass: 180.95, group: 5, period: 6, category: "transition metal", state: "solid", col: 4, row: 5 },
  { atomicNumber: 74, symbol: "W", name: "Tungsten", mass: 183.84, group: 6, period: 6, category: "transition metal", state: "solid", col: 5, row: 5 },
  { atomicNumber: 75, symbol: "Re", name: "Rhenium", mass: 186.21, group: 7, period: 6, category: "transition metal", state: "solid", col: 6, row: 5 },
  { atomicNumber: 76, symbol: "Os", name: "Osmium", mass: 190.23, group: 8, period: 6, category: "transition metal", state: "solid", col: 7, row: 5 },
  { atomicNumber: 77, symbol: "Ir", name: "Iridium", mass: 192.22, group: 9, period: 6, category: "transition metal", state: "solid", col: 8, row: 5 },
  { atomicNumber: 78, symbol: "Pt", name: "Platinum", mass: 195.08, group: 10, period: 6, category: "transition metal", state: "solid", col: 9, row: 5 },
  { atomicNumber: 79, symbol: "Au", name: "Gold", mass: 196.97, group: 11, period: 6, category: "transition metal", state: "solid", col: 10, row: 5 },
  { atomicNumber: 80, symbol: "Hg", name: "Mercury", mass: 200.59, group: 12, period: 6, category: "transition metal", state: "liquid", col: 11, row: 5 },
  { atomicNumber: 81, symbol: "Tl", name: "Thallium", mass: 204.38, group: 13, period: 6, category: "post-transition metal", state: "solid", col: 12, row: 5 },
  { atomicNumber: 82, symbol: "Pb", name: "Lead", mass: 207.2, group: 14, period: 6, category: "post-transition metal", state: "solid", col: 13, row: 5 },
  { atomicNumber: 83, symbol: "Bi", name: "Bismuth", mass: 208.98, group: 15, period: 6, category: "post-transition metal", state: "solid", col: 14, row: 5 },
  { atomicNumber: 84, symbol: "Po", name: "Polonium", mass: 209, group: 16, period: 6, category: "post-transition metal", state: "solid", col: 15, row: 5 },
  { atomicNumber: 85, symbol: "At", name: "Astatine", mass: 210, group: 17, period: 6, category: "halogen", state: "solid", col: 16, row: 5 },
  { atomicNumber: 86, symbol: "Rn", name: "Radon", mass: 222, group: 18, period: 6, category: "noble gas", state: "gas", col: 17, row: 5 },
  { atomicNumber: 87, symbol: "Fr", name: "Francium", mass: 223, group: 1, period: 7, category: "alkali metal", state: "solid", col: 0, row: 6 },
  { atomicNumber: 88, symbol: "Ra", name: "Radium", mass: 226, group: 2, period: 7, category: "alkaline earth metal", state: "solid", col: 1, row: 6 },
  { atomicNumber: 89, symbol: "Ac", name: "Actinium", mass: 227, group: 3, period: 7, category: "actinide", state: "solid", col: 2, row: 6 },
  { atomicNumber: 90, symbol: "Th", name: "Thorium", mass: 232.04, group: 3, period: 7, category: "actinide", state: "solid", col: 0, row: 8 },
  { atomicNumber: 91, symbol: "Pa", name: "Protactinium", mass: 231.04, group: 3, period: 7, category: "actinide", state: "solid", col: 1, row: 8 },
  { atomicNumber: 92, symbol: "U", name: "Uranium", mass: 238.03, group: 3, period: 7, category: "actinide", state: "solid", col: 2, row: 8 },
  { atomicNumber: 93, symbol: "Np", name: "Neptunium", mass: 237, group: 3, period: 7, category: "actinide", state: "solid", col: 3, row: 8 },
  { atomicNumber: 94, symbol: "Pu", name: "Plutonium", mass: 244, group: 3, period: 7, category: "actinide", state: "solid", col: 4, row: 8 },
  { atomicNumber: 95, symbol: "Am", name: "Americium", mass: 243, group: 3, period: 7, category: "actinide", state: "solid", col: 5, row: 8 },
  { atomicNumber: 96, symbol: "Cm", name: "Curium", mass: 247, group: 3, period: 7, category: "actinide", state: "solid", col: 6, row: 8 },
  { atomicNumber: 97, symbol: "Bk", name: "Berkelium", mass: 247, group: 3, period: 7, category: "actinide", state: "solid", col: 7, row: 8 },
  { atomicNumber: 98, symbol: "Cf", name: "Californium", mass: 251, group: 3, period: 7, category: "actinide", state: "solid", col: 8, row: 8 },
  { atomicNumber: 99, symbol: "Es", name: "Einsteinium", mass: 252, group: 3, period: 7, category: "actinide", state: "solid", col: 9, row: 8 },
  { atomicNumber: 100, symbol: "Fm", name: "Fermium", mass: 257, group: 3, period: 7, category: "actinide", state: "solid", col: 10, row: 8 },
  { atomicNumber: 101, symbol: "Md", name: "Mendelevium", mass: 258, group: 3, period: 7, category: "actinide", state: "solid", col: 11, row: 8 },
  { atomicNumber: 102, symbol: "No", name: "Nobelium", mass: 259, group: 3, period: 7, category: "actinide", state: "solid", col: 12, row: 8 },
  { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", mass: 262, group: 3, period: 7, category: "actinide", state: "solid", col: 13, row: 8 },
  { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", mass: 267, group: 4, period: 7, category: "transition metal", state: "solid", col: 3, row: 6 },
  { atomicNumber: 105, symbol: "Db", name: "Dubnium", mass: 268, group: 5, period: 7, category: "transition metal", state: "solid", col: 4, row: 6 },
  { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", mass: 269, group: 6, period: 7, category: "transition metal", state: "solid", col: 5, row: 6 },
  { atomicNumber: 107, symbol: "Bh", name: "Bohrium", mass: 270, group: 7, period: 7, category: "transition metal", state: "solid", col: 6, row: 6 },
  { atomicNumber: 108, symbol: "Hs", name: "Hassium", mass: 269, group: 8, period: 7, category: "transition metal", state: "solid", col: 7, row: 6 },
  { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", mass: 278, group: 9, period: 7, category: "transition metal", state: "solid", col: 8, row: 6 },
  { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", mass: 281, group: 10, period: 7, category: "transition metal", state: "solid", col: 9, row: 6 },
  { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", mass: 280, group: 11, period: 7, category: "transition metal", state: "solid", col: 10, row: 6 },
  { atomicNumber: 112, symbol: "Cn", name: "Copernicium", mass: 285, group: 12, period: 7, category: "transition metal", state: "solid", col: 11, row: 6 },
  { atomicNumber: 113, symbol: "Nh", name: "Nihonium", mass: 286, group: 13, period: 7, category: "post-transition metal", state: "solid", col: 12, row: 6 },
  { atomicNumber: 114, symbol: "Fl", name: "Flerovium", mass: 289, group: 14, period: 7, category: "post-transition metal", state: "solid", col: 13, row: 6 },
  { atomicNumber: 115, symbol: "Mc", name: "Moscovium", mass: 290, group: 15, period: 7, category: "post-transition metal", state: "solid", col: 14, row: 6 },
  { atomicNumber: 116, symbol: "Lv", name: "Livermorium", mass: 293, group: 16, period: 7, category: "post-transition metal", state: "solid", col: 15, row: 6 },
  { atomicNumber: 117, symbol: "Ts", name: "Tennessine", mass: 294, group: 17, period: 7, category: "halogen", state: "solid", col: 16, row: 6 },
  { atomicNumber: 118, symbol: "Og", name: "Oganesson", mass: 294, group: 18, period: 7, category: "noble gas", state: "gas", col: 17, row: 6 }
];

// Color coding based on element category
let categoryColors = {
  "alkali metal": "#FF6666",        // Red
  "alkaline earth metal": "#FFDEAD", // Light Orange
  "transition metal": "#FFC0C0",    // Light Red
  "post-transition metal": "#CCCCCC", // Gray
  "metalloid": "#CCCC99",           // Olive
  "non-metal": "#A0FFA0",           // Light Green
  "halogen": "#FFFF99",             // Light Yellow
  "noble gas": "#C0FFFF",           // Light Cyan
  "lanthanide": "#FFBFFF",          // Light Purple
  "actinide": "#FF99CC"             // Pink
};

function setup() {
  createCanvas(950, 600); // Canvas size to fit table and properties
  textSize(12); // Default text size for elements
}

function draw() {
  background(255); // White background
  let selectedElement = null;

  // Draw all elements
  for (let element of elements) {
    let x = 50 * element.col; // 50px wide boxes
    let y = getY(element.row); // Calculate y-position based on row

    // Check if mouse is hovering over this element
    if (mouseX >= x && mouseX <= x + 50 && mouseY >= y && mouseY <= y + 50) {
      selectedElement = element;
    }

    // Draw element box
    fill(categoryColors[element.category]); // Color based on category
    stroke(0); // Black border
    if (selectedElement === element) {
      strokeWeight(3); // Thicker border for hovered element
    } else {
      strokeWeight(1); // Normal border
    }
    rect(x, y, 50, 50); // Draw 50x50 pixel box

    // Draw atomic number and symbol
    fill(0); // Black text
    textAlign(LEFT, TOP);
    text(element.atomicNumber, x + 5, y + 5); // Atomic number in top-left
    textAlign(CENTER, CENTER);
    textSize(16);
    text(element.symbol, x + 25, y + 25); // Symbol in center
    textSize(12); // Reset for next iteration
  }

  // Display properties of the selected element
  if (selectedElement) {
    fill(220); // Light gray background for properties box
    rect(50, 450, 850, 100); // Properties box at bottom
    fill(0); // Black text
    textAlign(LEFT, TOP);
    textSize(14);
    text("Name: " + selectedElement.name, 60, 460);
    text("Atomic Number: " + selectedElement.atomicNumber, 60, 480);
    text("Symbol: " + selectedElement.symbol, 60, 500);
    text("Atomic Mass: " + selectedElement.mass, 60, 520);
    text("Group: " + selectedElement.group, 300, 460);
    text("Period: " + selectedElement.period, 300, 480);
    text("Category: " + selectedElement.category, 300, 500);
    text("State: " + selectedElement.state, 300, 520); // State labeled here
  }
}

// Function to calculate y-position based on row
function getY(row) {
  if (row <= 6) {
    return 50 * row; // Main grid: periods 1-7 (rows 0-6)
  } else if (row === 7) {
    return 350; // Lanthanides row
  } else if (row === 8) {
    return 400; // Actinides row
  }
}