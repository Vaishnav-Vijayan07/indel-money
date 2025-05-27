async function GET(page = 1, limit = 10) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/blogs?page=${page}&limit=${limit}`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    

    if (result.status === "success") {
      const { content, sliderItems, blogs, pagination } = result.data || {};
      if (!content || !sliderItems || !blogs || !pagination) {
        
          content,
          sliderItems,
          blogs,
          pagination,
        });
      }
      return {
        content,
        sliderData: sliderItems,
        blogs,
        pagination: pagination || { currentPage: 1, totalPages: 1, totalItems: 0 },
        error: null,
      };
    }
    
    return {
      content: null,
      sliderData: null,
      blogs: null,
      pagination: null,
      error: result.message,
    };
  } catch (error) {
    
    return {
      content: null,
      sliderData: null,
      blogs: null,
      pagination: null,
      error: "Failed to fetch blog data",
    };
  }
}