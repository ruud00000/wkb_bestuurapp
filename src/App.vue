<template>

    <div class="topnav" id="myTopnav">
        <!--<img id="logo" src="assets/logo_black_2x.png" alt="Winterswijkse kegelbond logo" href="#top" height="25"> -->
        <a href="#top" class="active">Home</a>
        <div class="dropdown">
            <button class="dropbtn">Leden
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#">WKB competitie</a>
                <a href="#">Meesterschappen</a>
                <a href="#">Competitiedata</a>
                <a href="#">Meesterschappen data</a>
                <a href="#">Download competitie uitslagen</a>
                <a href="#">Download meesterschappen uitslagen</a>
                <a href="#">Instellingen competitie</a>
                <a href="#">Instellingen meesterschappen</a>
                <a href="#">Profiel</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Clubs
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#">Verslag van WKB-overleg</a>
                <a href="#">Genomen besluit</a>
                <a href="#">Binnengekomen informatie/verzoek</a>
                <a href="#">Archief</a>
                <hr>
                <a href="#">Competitiedata</a>
                <a href="#">Deelnemers competitie</a>
                <hr>
                <a href="#">Verzonden persbericht</a>
                <a href="#">Perspublicatie</a>
                <a href="#">Binnengekomen nieuws</a>
                <hr>
                <a href="#">Geplande toernooien</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Publiek
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="#">Home pagina</a>
                <a href="#">Clubs</a>
                <a href="#">Toppers</a>
                <a href="#">Locaties</a>
                <a href="#">Kegelsport</a>
                <a href="#">Kosten</a>
                <a href="#">Organisatie</a>
           </div>
        </div>

         <a href="javascript:void(0);" class="icon" @click="toggleResponsive()">
            <i class="fa fa-bars"></i>
        </a> 
    </div>

    <div id="main" ref="top"> 
         <section class = "top-level-section" v-show="!hideDownload" ref="download">
            <Download  :todo="todo"/>
        </section>

    </div>
</template>

<script>

import backButton from "./assets/chevron_left_FILL0_wght700_GRAD0_opsz48.png"

import Download from './Download.vue'

export default {
    name: "App",
    components: {
        Download
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
    @import './assets/styles/responsive_navbar_dropdown.css';
</style>