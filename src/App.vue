<template>

    <div class="topnav" id="myTopnav">
        <!--<img id="logo" src="assets/logo_black_2x.png" alt="Winterswijkse kegelbond logo" href="#top" height="25"> -->
        <a href="#top" class="active">Home</a>
        <a href="#wkbcompetitie">WKB competitie</a>
        <a href="#meesterschappen">Meesterschappen</a>
        <a href="#wedstrijden">Wedstrijden</a>
        <a href="#competitiedata">Competitiedata</a>
        <a href="#instellingen">Instellingen</a>
        <a href="#download">Download</a>
        <a href="#profiel">Profiel</a>
        <a href="javascript:void(0);" class="icon" @click="toggleResponsive()">
            <i class="fa fa-bars"></i>
        </a> 
    </div>

    <div id="main" ref="top"> 
        <section class = "top-level-section" v-show="!hideCompetitie" ref="competitie">
            <Competitie  :todo="todo"/>
        </section>
        <section class = "top-level-section" v-show="!hideCompetitiedata" ref="competitiedata">
            <Competitiedata  :todo="todo"/>
        </section>
        <section class = "top-level-section" v-show="!hideInstellingen" ref="instellingen">
            <Instellingen  :todo="todo"/>
        </section>
        <section class = "top-level-section" v-show="!hideDownload" ref="download">
            <Download  :todo="todo"/>
        </section>
        <section class = "top-level-section" v-show="!hideProfiel" ref="profiel">
            <Profiel  :todo="todo"/>
        </section>
    </div>
</template>

<script>

import backButton from "./assets/chevron_left_FILL0_wght700_GRAD0_opsz48.png"
import Competitie from './Competitie.vue'
import Competitiedata from './Competitiedata.vue'
import Instellingen from './Instellingen.vue'
import Download from './Download.vue'
import Profiel from './Profiel.vue'

export default {
    name: "App",
    components: {
        Competitie,
        Competitiedata,
        Instellingen,
        Download,
        Profiel
    },
    data() {
        return {
            source: "",
            backButtonImage: backButton,
            hideCompetitie: false,
            hideCompetitiedata: true,
            hideInstellingen: true,
            hideDownload: true,
            hideProfiel: true,
            todo: false
        }
    },
    methods: {
        getSource() {
            return this.source
        },
        handleCloseCompetitie() {
            this.hideCompetitie = true
            this.$refs[this.source].scrollIntoView({ behavior: 'smooth'})
        },
        handleCloseCompetitiedata() {
            this.hideCompetitiedata = true
            this.$refs[this.source].scrollIntoView({ behavior: 'smooth'})
        },
        handleCloseInstellingen() {
            this.hideInstellingen = true
            this.$refs[this.source].scrollIntoView({ behavior: 'smooth'})  
        },
        handleCloseDownload() {
            this.hideDownload = true
            this.$refs[this.source].scrollIntoView({ behavior: 'smooth'})
        },
        handleCloseProfiel() {
            this.hideProfiel = true
            this.$refs[this.source].scrollIntoView({ behavior: 'smooth'})
        },
        showScrollInto(currentLocation, toLocation) {
            this.source = currentLocation

            switch(toLocation) {
                case 'competitie':
                    this.hideCompetitie = false
                    break
                case 'competitiedata':
                    this.hideCompetitiedata = false
                    break
                case 'instellingen':
                    this.hideInstellingen = false
                    break
                case 'download':
                    this.hideDownload = false
                    break
                case 'profiel':
                    this.hideProfiel = false
                    break
            }

            this.$nextTick(() => 
                this.$refs[toLocation].scrollIntoView({ behavior: 'smooth'}) 
                )
             
        },
        /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
        toggleResponsive() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    }
}
</script>

<style>
    @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    @import './assets/styles/style.css';
</style>