<template>

<div class="topnav" id="myTopnav">
        <!--<img id="logo" src="assets/logo_black_2x.png" alt="Winterswijkse kegelbond logo" href="#top" height="25"> -->
        <a href="#top" class="active">Home</a>
        <a href="#uitslagen">Uitslagen</a>
        <a href="#data">Data</a>
        <a href="#deelnemers">Deelnemers</a>
        <a href="#leden">Leden</a>
        <a href="#clubs">Clubs</a>
        <a href="#website">Website</a>
        <a href="#overig">Overig</a>
        <a href="javascript:void(0);" id="nav-button" class="icon" @click="toggleResponsive()">
            <i class="fa fa-bars"></i>
        </a> 
    </div>

    <div id="main" ref="top"> 
        <button @click="toggleResponsive()"></button>
        <section id="uitslagen" class = "top-level-section" v-show="!hideUitslagen" ref="uitslagen">
            <Uitslagen  :todo="todo"/>
        </section>
        <section class = "top-level-section" v-show="!hideData" ref="data">
            <Data  :todo="todo"/>
        </section>
        <section class = "top-level-section" v-show="!hideDeelnemers" ref="deelnemers">
            <Deelnemers  :todo="todo"/>
        </section>
        <section id="leden" class = "top-level-section" v-show="!hideLeden" ref="leden">
            <Leden  :todo="todo"/>
        </section>
        <section class = "top-level-section" v-show="!hideClubs" ref="clubs">
            <Clubs  :todo="todo"/>
        </section>
        <section class = "top-level-section" v-show="!hideWebsite" ref="website">
            <Website  :todo="todo"/>
        </section>
        <section class = "top-level-section" v-show="!hideOverig" ref="overig">
            <Overig  :todo="todo"/>
        </section>
    </div>

</template>

<script>

import backButton from "./assets/chevron_left_FILL0_wght700_GRAD0_opsz48.png"

import Uitslagen from './Uitslagen.vue'
import Data from './Data.vue'
import Deelnemers from './Deelnemers.vue'
import Leden from './Leden.vue'
import Clubs from './Clubs.vue'
import Website from './Website.vue'
import Overig from './Overig.vue'


export default {
    name: "App",
    components: {
        Uitslagen,
        Data,
        Deelnemers,
        Leden,
        Clubs,
        Website,
        Overig
    },
    data() {
        return {
            source: "",
            backButtonImage: backButton,
            hideUitslagen: true,
            hideData: true,
            hideDeelnemers: true,
            hideLeden: false,
            hideClubs: true,
            hideWebsite: true,
            hideOverig: true,
            todo: false
        }
    },
    methods: {
        /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
        toggleResponsive() {
            var x = document.getElementById("myTopnav")
            if (x.className === "topnav") {
                x.className += " responsive"
            } else {
                x.className = "topnav"
            }
        }
    }
}
</script>

<style>
    @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    @import './assets/styles/style.css';
    @import './assets/styles/topnav_responsive.css';
</style>