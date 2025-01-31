import vector from "@/assets/role/Vector.png";
import vectorOne from "@/assets/role/vectorOne.png";
import vectorTwo from "@/assets/role/vectorTwo.png";
import vectorThree from "@/assets/role/vectorThree.png";
import vectorFour from "@/assets/role/vectorFour.png";
import vectorFive from "@/assets/role/vectorFive.png";

import mediaGoalOne from "@/assets/media/imageOne.png";
import mediaGoalTwo from "@/assets/media/imageTwo.png";
import mediaGoalThree from "@/assets/media/imageThree.png";

import newsImgOne from "@/assets/media/newsOne.png"
import newsImgTwo from "@/assets/media/newsTwo.png"
import newsImgThree from "@/assets/media/newsThree.png"

const NAV_LINKS = [
    {
        linkName: "Home",
        linkUrl: "/"
    },
    {
        linkName: "About us",
        linkUrl: "/about"
    },
    {
        linkName: "What We Do",
        linkUrl: "/role"
    },
    {
        linkName: "Media",
        linkUrl: "/media"
    },
    {
        linkName: "Contact",
        linkUrl: "/contact"
    },
]

const ROLE_PARTS = [
    {
        title: "Build healthy cities",
        icon: vector
    },
    {
        title: "Protect land and water",
        icon: vectorOne
    },
    {
        title: "Tree plantation",
        icon: vectorTwo
    },
    {
        title: "Water sustainability",
        icon: vectorThree
    },
    {
        title: "Animal safety",
        icon: vectorFour
    },
    {
        title: "Biodiversity",
        icon: vectorFive
    },
]

const MEDIA_GOALS = [
    {
        title: "Don’t destroy greenery and don’t spoil scenery.",
        img: mediaGoalOne
    },
    {
        title: "Why saving wildlife is extremely important",
        img: mediaGoalTwo
    },
    {
        title: "Caring for the present is caring for the future",
        img: mediaGoalThree
    },
]

const MEDIA_RECENT_NEWS = [
    {
        title: "Don’t destroy greenery and don’t spoil scenery",
        img: mediaGoalOne
    },
    {
        title: " Is climate change happening faster than expected?",
        img: newsImgOne
    },
    {
        title: "Top 10 facts about wind farms you didn't know",
        img: newsImgTwo
    },
    {
        title: "Our goal is to make water available for everyone",
        img: newsImgThree
    },
]

export {NAV_LINKS, ROLE_PARTS, MEDIA_GOALS, MEDIA_RECENT_NEWS}