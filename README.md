# the inner machinations of ichigoleite

this is the repository of this compilation.
feel free to use, after all it is under the MIT license

## Setup

1.  Make a fork and modify any of the files here.
    Some files to note:

        - src/components/header.astro (Header)
        - src/components/footer.astro (Footer)
        - src/components/head.astro (HTML head, contains metadata and stuff)
        - src/assets/images/bg.png (Background image (Optimized))
        - public/actualbg.gif (Background image (Fallback for older browsers))
        - public/favicon (Icons)
        - public/pages/index.astro (Index page)
        - public/pages/questions/[...slug].astro (Question page (IMPORTANT! Update the Giscus script element to your own repository! ([Giscus](https://giscus.app/))))

2.  Add all your Miitomo question images in public/questionsimg. The filename should be in this format: yyyyMMddHHmmss, pictures imported from Miitomo should automatically be in this format.

3.  Build and host this project on your preferred hosting provider (e.g Cloudflare Pages).

## Credits

- Nintendo for making Tomiimo
- Astro.js
- Giscus

## AI disclaimer

This site has been made without any use of an AI/LLM. All code either come
from ichigoleite, the official Astro.js documentation, or other sources like
StackOverflow.
