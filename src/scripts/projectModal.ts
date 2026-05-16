const modal = document.getElementById("myDialog") as HTMLDialogElement;
const openModalBtn = document.querySelectorAll(".openModalBtns") as NodeListOf<HTMLButtonElement>;
const closeModalBtn = document.getElementById("closeModalBtn") as HTMLButtonElement;

const modalImage = document.getElementById("modalImage") as HTMLImageElement;
const prevBtn = document.getElementById("prevBtn") as HTMLButtonElement;
const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;

let currentGallery: string[] = [];
let currentIndex = 0;

function updateButtonState() {
  if (currentGallery.length <= 1) {
    nextBtn.disabled = true;
    nextBtn.classList.add("btnDisabled");
    prevBtn.disabled = true;
    prevBtn.classList.add("btnDisabled");
  } else {
    prevBtn.disabled = currentIndex === 0;
    prevBtn.classList.toggle("btnDisabled", currentIndex === 0);

    nextBtn.disabled = currentIndex === currentGallery.length - 1;
    nextBtn.classList.toggle("btnDisabled", currentIndex === currentGallery.length - 1);
  }
}

openModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    const galleryData = btn.getAttribute("data-gallery");

    if (galleryData) 
    {
      currentGallery = JSON.parse(galleryData);
      currentIndex = 0;

      if (currentGallery.length > 0) 
      {
        modalImage.src = currentGallery[currentIndex];
        updateButtonState();
      }
    }

    modal.showModal();
  })
});

modal.addEventListener("close", () => {
  document.body.style.overflow = "";
})

closeModalBtn.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (e)=> {
  if (e.target !== modal) return

  const dialogDimensions = modal.getBoundingClientRect();
  
  if(
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom 
  ) 
  {
    modal.close();
  }
})

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (currentIndex < currentGallery.length - 1) {
    currentIndex++;
    modalImage.src = currentGallery[currentIndex];
    updateButtonState();
  }
})

prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (currentIndex > 0) {
    currentIndex--;
    modalImage.src = currentGallery[currentIndex];
    updateButtonState();
  }
})