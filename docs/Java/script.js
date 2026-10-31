/*
  Add photographs to images and list them in PHOTO_LIST.
  `src` is the thumbnail, `full` is the image shown in the viewer.
  Use matching image proportions if you want to minimize cropping in the uniform 4:3 grid.
*/
const PHOTO_LIST = [

  {src:"images/capelight_thumb.webp", full:"images/capelight.webp", title:"Cape Light", category:"Sloops", location:"l18xh20", alt:"Cape Light" },
  {src:"images/approachingsails_thumb.webp", full:"images/approachingsails.webp", title:"Approaching Sails", category:"Sloops", location:"l20xh22", alt:"Mist and Waves" },
  {src:"images/perfectday_thumb.webp", full:"images/perfectday.webp", title:"Perfect Day", category:"Sloops", location:"l18xh20", alt:"Perfect day to sail" },
  {src:"images/racingsails_thumb.webp", full:"images/racingsails.webp", title:"Racing Sails", category:"Schooners", location:"l20xh24", alt:"Racing to the horizon" },
  
  {src:"images/ThreeFish_thumb.webp", full:"images/ThreeFish.webp", title:"Three Fish", category:"Sloops", location:"l18xh20", alt:"Three Fish" },
  {src:"images/safeharbor_thumb.webp", full:"images/safeharbor.webp", title:"Sails at rest", category:"Sloops", location:"l18xh20 ", alt:"Ships at rest" },
  {src:"images/squaredrigged_thumb.webp", full:"images/squaredrigged.webp", title:"Square Rigged", category:"Sloops", location:"l18xh20 ", alt:"Old quare rigged ship" },
  {src:"images/gaffrigged_thumb.webp", full:"images/gaffrigged.webp", title:"Gaff Rigged", category:"Sloops", location:"l18xh20", alt:"Old gaff rigged ship" },
  
  {src:"images/fadeingsun_thumb.webp", full:"images/fadeingsun.webp", title:"Fading Sun", category:"Schooners", location:"l20xh24", alt:"Sun goes down after day on the water" },
  {src:"images/beachcruiseI_thumb.webp", full:"images/beachcruiseI.webp", title:"Beach Cruise", category:"Sloops", location:"l18xh20", alt:"Cruise along the shore" },
  {src:"images/beachcruiseII_thumb.webp", full:"images/beachcruiseII.webp", title:"Beach Cruise II", category:"Schooners", location:"l20xh24 ", alt:"Cruise along the shore" },
  {src:"images/BigFlowers2_thumb.webp", full:"images/BigFlowers2.webp", title:"Big Flowers II", category:"Schooners", location:"l18xh20", alt:"Big Flowers II" },
  
  {src:"images/seasquall_IIbig_thumb.webp", full:"images/seasquall_IIbig.webp", title:"Sea Squall", category:"Sloops", location:"l18xh20", alt:"Storm at Sea" },
  {src:"images/seastorm_thumb.webp", full:"images/seastorm.webp", title:"Sea Storm", category:"Sloops", location:"l18xh20", alt:"Rough Weather" },
  {src:"images/stormking_thumb.webp", full:"images/stormking.webp", title:"Storm King", category:"Sloops", location:"l18xh20", alt:"Rough Sailing" },
  {src:"images/BigFlowersSmall_thumb.webp", full:"images/BigFlowersSmall.webp", title:"Big Flowers", category:"Sloops", location:"l20xh24", alt:"Big Flowers" },  
  
  {src:"images/yachtrace_thumb.webp", full:"images/yachtrace.webp", title:"Yacht Race", category:"Sloops", location:"l18xh20", alt:"Storm at Sea" },
  {src:"images/yachtraceII_thumb.webp", full:"images/yachtraceII.webp", title:"Yacht Race II", category:"Schooners", location:"l20xh24", alt:"Yacht Race II" },
  {src:"images/boathouse_thumb.webp", full:"images/boathouse.webp", title:"Boat House", category:"Sloops", location:"l18xh20", alt:"Rough Sailing" },
  {src:"images/SummerGarden_II_thumb.webp", full:"images/SummerGarden_II.webp", title:"SummerGarden II", category:"Schooners", location:"l18xh20", alt:"SummerGarden_II" },  
  
  {src:"images/BeachGrass_thumb.webp", full:"images/BeachGrass.webp", title:"Beach Grass", category:"Sloops", location:"l18xh20", alt:"Beach Grass" },
  {src:"images/Brooklyn_Bridge_II_thumb.webp", full:"images/Brooklyn_Bridge_II.webp", title:"Brooklyn Bridge II", category:"Sloops", location:"l18xh20", alt:"Brooklyn Bridge II" },
  {src:"images/BrooklynBridge_thumb.webp", full:"images/BrooklynBridge.webp", title:"Brooklyn Bridge", category:"Ketchs", location:"l18xh20", alt:"Brooklyn Bridge" },
  {src:"images/FishingYawl_thumb.webp", full:"images/FishingYawl.webp", title:"Fishing Ketch", category:"Ketchs", location:"l18xh20", alt:"Fishing Ketch" },
  
  {src:"images/FlowerPot2_thumb.webp", full:"images/FlowerPot2.webp", title:"Flower Pot II", category:"Schooners", location:"l20xh24 ", alt:"Flower Pot II" }, 
  {src:"images/FogBank_II_thumb.webp", full:"images/FogBank_II.webp", title:"Fog Bank II", category:"Sloops", location:"l18xh20", alt:"Fog Bank II" },
  {src:"images/FogBank_III_thumb.webp", full:"images/FogBank_III.webp", title:"FogBank III", category:"Sloops", location:"l18xh20", alt:"FogBank III" },
  {src:"images/Bouquet_I_thumb.webp", full:"images/Bouquet_I.webp", title:"Bouquet I", category:"Sloops", location:"l18xh20 ", alt:"Bouquet I" },

  {src:"images/GentleSurf_thumb.webp", full:"images/GentleSurf.webp", title:"Gentle Surf", category:"Sloops", location:"l18xh20", alt:"Gentle Surf" },
  {src:"images/Harbor_thumb.webp", full:"images/Harbor.webp", title:"Harbor", category:"Sloops", location:"l18xh20", alt:"Harbor" },
  {src:"images/Klimt_thumb.webp", full:"images/Klimt.webp", title:"Klimt", category:"Sloops", location:"l18xh20", alt:"Harbor" },
  {src:"images/Matisse_II_thumb.webp", full:"images/Matisse_II.webp", title:"Matisse II", category:"Schooners", location:"l18xh20", alt:"Matisse II" },
  
  {src:"images/vangogh1_thumb.webp", full:"images/vangogh1.webp", title:"Vangogh", category:"Schooners", location:"l20xh24", alt:"Vangogh" },
  {src:"images/SummerGarden_I_thumb.webp", full:"images/SummerGarden_I.webp", title:"SummerGarden I", category:"Sloops", location:"l20xh24", alt:"SummerGarden_I"},   
  {src:"images/Umbrellas_thumb.webp", full:"images/Umbrellas.webp", title:"Umbrellas", category:"Ketchs", location:"l18xh20", alt:"Umbrellas" },
  {src:"images/Bouquet_II_thumb.webp", full:"images/Bouquet_II.webp", title:"Bouquet II", category:"Sloops", location:"l18xh20 ", alt:"Bouquet II" },  
   
 {src:"images/SurfsUp_II_thumb.webp", full:"images/SurfsUp_II.webp", title:"SurfsUp II", category:"Ketchs", location:"l18xh20", alt:"SurfsUp II" },
  {src:"images/SunsetBeach_II_thumb.webp", full:"images/SunsetBeach_II.webp", title:"Sunset Beach II", category:"Ketchs", location:"l18xh20", alt:"Sunset Beach II" },
  {src:"images/SnowSquall_thumb.webp", full:"images/SnowSquall.webp", title:"Snow Squall", category:"Ketchs", location:"l18xh20", alt:"Snow Squall" }, 
  {src:"images/JazzAge_thumb.webp", full:"images/JazzAge.webp", title:"Jazz Age", category:"Schooners", location:"l20xh24", alt:"Jazz Age" }
  
];

const grid = document.querySelector("#galleryGrid");
const filters = document.querySelector("#categoryFilters");
const emptyMessage = document.querySelector("#emptyMessage");
const count = document.querySelector("#galleryCount");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const lightboxCounter = document.querySelector("#lightboxCounter");
let visiblePhotos = [];
let activeIndex = 0;

document.querySelector("#year").textContent = new Date().getFullYear();

[...new Set(PHOTO_LIST.map(p => p.category).filter(Boolean))]
  .sort((a,b) => a.localeCompare(b))
  .forEach(category => {
    const button = document.createElement("button");
    button.className = "filter-button";
    button.dataset.category = category;
    button.textContent = category === "Black & White" ? "Black & White" : category;
    button.type = "button";
    filters.append(button);
  });

filters.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  filters.querySelectorAll(".filter-button").forEach(b => b.classList.toggle("active", b === button));
  renderGallery(button.dataset.category);
});

function renderGallery(category = "all") {
  visiblePhotos = PHOTO_LIST.filter(p => category === "all" || p.category === category);
  grid.replaceChildren();
  emptyMessage.hidden = visiblePhotos.length > 0;
  count.textContent = `${visiblePhotos.length} photograph${visiblePhotos.length === 1 ? "" : "s"}`;

  visiblePhotos.forEach((photo, index) => {
    const button = document.createElement("button");
    button.className = "photo-card";
    button.type = "button";
    button.setAttribute("aria-label", `View ${photo.title || "photograph"}`);
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt || photo.title || "Portfolio photograph";
    img.loading = "lazy";
    img.decoding = "async";
    const title = document.createElement("span");
    title.className = "photo-title";
    title.textContent = photo.title || "Untitled";
    const location = document.createElement("span");
    location.className = "photo-category";
    location.textContent = photo.location || photo.category || "";
    button.append(img, title, location);
    button.addEventListener("click", () => openLightbox(index));
    grid.append(button);
  });
}
function openLightbox(index) {
  activeIndex = index;
  showPhoto();
  if (typeof lightbox.showModal === "function") lightbox.showModal();
  else lightbox.setAttribute("open", "");
}
function showPhoto() {
  const photo = visiblePhotos[activeIndex];
  if (!photo) return;
  lightboxImage.src = photo.full || photo.src;
  lightboxImage.alt = photo.alt || photo.title || "Portfolio photograph";
  lightboxCaption.textContent = [photo.title, photo.location].filter(Boolean).join(" — ");
  lightboxCounter.textContent = `${activeIndex + 1} / ${visiblePhotos.length}`;
}
function stepPhoto(direction) {
  if (!visiblePhotos.length) return;
  activeIndex = (activeIndex + direction + visiblePhotos.length) % visiblePhotos.length;
  showPhoto();
}
function closeLightbox() {
  if (typeof lightbox.close === "function") lightbox.close();
  else lightbox.removeAttribute("open");
}
document.querySelector("#closeLightbox").addEventListener("click", closeLightbox);
document.querySelector("#prevPhoto").addEventListener("click", () => stepPhoto(-1));
document.querySelector("#nextPhoto").addEventListener("click", () => stepPhoto(1));
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") stepPhoto(-1);
  if (event.key === "ArrowRight") stepPhoto(1);
});
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
renderGallery();
