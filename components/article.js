export default function Article(imageUrl, imageAlt, title, fullDescription) {
  return `<section class="article-container">
      <img class="article-banner-image" src="${imageUrl}" alt="${imageAlt}" />
      <h1 class="article-title">${title}</h1>
      <div class="chip-container">
      </div>
      <div>
      ${fullDescription}
      </div>
    </section>`;
}
