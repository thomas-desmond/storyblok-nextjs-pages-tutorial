import {
    apiPlugin,
    getStoryblokApi as getStoryblokApiDefault,
    storyblokInit
} from "@storyblok/react"
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Hero from '../components/Hero';

const storyblokApi = undefined

const components = {
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    page: Page,
    Hero: Hero
};

export const AppStoryblokInit = () => {
    storyblokInit({
        accessToken: process.env.STORYBLOK_API_TOKEN,
        use: [apiPlugin],
        apiOptions: {
            region: "us",
        },
        components
    })

    return getStoryblokApiDefault()
}

export const customGetStoryblokApi = () => {
    if (storyblokApi !== undefined) return storyblokApi
    return AppStoryblokInit()
}