module.exports = class {
  data() {
    return {
      permalink: "/search-index.json",
      eleventyExcludeFromCollections: true
    };
  }

  render(data) {
    const items = [];

    for (const review of data.collections.reviews || []) {
      items.push({
        title: review.data.title || "",
        url: review.url,
        excerpt: review.data.excerpt || "",
        cover: review.data.cover_image || "",
        type: "Review",
        date: review.data.date || ""
      });
    }

    for (const item of data.collections.news || []) {
      items.push({
        title: item.data.title || "",
        url: item.url,
        excerpt: item.data.excerpt || "",
        cover: item.data.cover_image || "",
        type: "News",
        date: item.data.date || ""
      });
    }

    for (const item of data.collections.articles || []) {
      items.push({
        title: item.data.title || "",
        url: item.url,
        excerpt: item.data.excerpt || "",
        cover: item.data.cover_image || "",
        type: "Article",
        date: item.data.date || ""
      });
    }

    return JSON.stringify(items);
  }
};