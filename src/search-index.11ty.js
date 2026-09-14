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
        type: "Review"
      });
    }

    for (const item of data.collections.news || []) {
      items.push({
        title: item.data.title || "",
        url: item.url,
        excerpt: item.data.excerpt || "",
        type: "News"
      });
    }

    for (const item of data.collections.articles || []) {
      items.push({
        title: item.data.title || "",
        url: item.url,
        excerpt: item.data.excerpt || "",
        type: "Article"
      });
    }

    return JSON.stringify(items);
  }
};