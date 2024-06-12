import Head from "next/head";
import Layout from "../components/Layout";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import { customGetStoryblokApi } from "../lib/customGetStoryblokApi";


export default function Page({ story, locales, locale, defaultLocale, preview }) {
  story = useStoryblokState(story, {
    language: locale
  });
  return (
    <div >
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout locales={locales} locale={locale} defaultLocale={defaultLocale}>
        <StoryblokComponent blok={story.content} locale={locale} />
      </Layout>
    </div>
  );
}
export async function getStaticProps({ params, locale, preview }) {
  let slug = params.slug ? params.slug.join("/") : "home";
  let sbParams = {
    version: preview ? "draft" : "published",
    language: locale
  };
  const storyblokApi = customGetStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: preview || false
    },
    revalidate: 3600,
  };
}
export async function getStaticPaths({  }) {
  const storyblokApi = customGetStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: 'published'
  });
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });

  });
  return {
    paths: paths,
    fallback: false,
  };
}