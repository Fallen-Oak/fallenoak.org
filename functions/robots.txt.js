export const onRequest = async ({ request }) => {
    const url = new URL(request.url);
    let content = '';
  
    if (url.hostname === 'pony.fallenoak.org') {
      // Block crawlers from pony.fallenoak.org
      content = 'User-agent: *\nDisallow: /';
    } else {
      // Allow crawling on other subdomains and the main site
      content = 'User-agent: *\nDisallow:';
    }
  
    return new Response(content, {
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  };