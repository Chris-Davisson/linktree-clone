const shareButtons = document.querySelectorAll(".tile-share-button");
async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute("link");
  try {
    await navigator.clipboard.writeText(link);
  } catch (error) {
    console.log(error);
  }
}

shareButtons.forEach((shareButton) =>
  shareButton.addEventListener("click", copyText)
);

async function foo() {
  const link = "https://christopher-davisson.com";
  try {
    await navigator.clipboard.writeText(link);
  } catch (error) {
    Console.log(error);
  }
}

const titleShareButton = document.querySelector(".share-button");
titleShareButton.addEventListener("click", foo);
