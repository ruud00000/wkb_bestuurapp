<template>
    <h1>Leden</h1>
    <form >
        <div>
            <label for="clubpre">Club</label>
            <select id="clubpre" v-model="clubpreselected" :style="{ color: clubprecolor }" @change="setColor('clubpre')" required>
                <option disabled value="">Selecteer een club</option>
                <option value="GEK">GEK</option>
                <option value="ONA">ONA</option>
                <option value="Jannao">Jannao</option>
            </select>
        </div>
        <div>
            <label for="lid">Lid</label>
            <select id="lid" v-model="lidselected" :style="{ color: lidcolor }" @change="setColor('lid')" required>
                <option disabled value="">Selecteer een lid</option>
                <option value="wmemelink">Wim Memelink</option>
                <option value="theocorts">TheoCorts</option>
                <option value="keesschieven">Kees Schieven</option>
            </select>
        </div>   
    </form>
     <div v-show="!isEditMode">
        <img :src="profielafbeelding"><br><br>
        <span>Lid sinds: </span><b class="antwoord" id="lidsinds">{{ lidsinds }}</b>
        <hr>
        <span>Achternaam: </span><b class="antwoord" id="achternaam">{{ achternaam }}</b>
        <hr>
        <span>Voornaam: </span><b class="antwoord" id="voornaam">{{ voornaam }}</b>
        <hr>
        <span>Adres: </span><b class="antwoord" id="adres">{{ adres }}</b>
        <hr>
        <span>Postcode: </span><b class="antwoord" id="postcode">{{ postcode }}</b>
        <hr>
        <span>Woonplaats: </span><b class="antwoord" id="woonplaats">{{ woonplaats }}</b>
        <hr>
        <span>Geboortedatum: </span><b class="antwoord" id="geboortedatum">{{ geboortedatum }}</b>
        <hr>
        <span>E-mail: </span><b class="antwoord" id="email">{{ email }}</b>
        <hr>
        <span>Club: </span><b class="antwoord" id="club">{{ club }}</b>
        <hr>
        <span>Licentie: </span><b class="antwoord" id="licentie">{{ licentie }}</b>
        <hr>
        <div class="button-wrapper">
            <button @click="handleEditLid">Wijzig</button>
        </div>
    </div>
    <div v-show="isEditMode">
        <img :src="profielafbeelding"><br><br>
        <label for="input-lidsinds">Lid sinds<span class="required"> *</span></label>
        <input id="input-lidsinds" v-model="lidsinds" type="text" placeholder="dd/mm/jjjj" required/><br>
        <label for="input-achternaam">Achternaam<span class="required"> *</span></label>
        <input id="input-achternaam" v-model="achternaam" type="text" placeholder="Achternaam" required/><br>
        <label for="input-voornaam">Voornaam<span class="required"> *</span></label>
        <input id="input-voornaam" v-model="voornaam" type="text" placeholder="Voornaam" required/><br>                    
        <label for="input-adres">Adres<span class="required"> *</span></label>
        <input id="input-adres" v-model="adres" type="text" placeholder="Adres" required/><br>
        <label for="input-postcode">Postcode<span class="required"> *</span></label>
        <input id="input-postcode" v-model="postcode" type="tel" placeholder="Postcode" required/><br>
        <label for="input-woonplaats">Woonplaats<span class="required"> *</span></label>
        <input id="input-woonplaats" v-model="woonplaats" type="text" placeholder="Woonplaats" required/><br>                    
        <label for="input-geboortedatum">Geboortedatum<span class="required"> *</span></label>
        <input id="input-geboortedatum" v-model="geboortedatum" type="tel" placeholder="Geboortedatum" required/><br>
        <label for="input-email">Email<span class="required"> *</span></label>
        <input id="input-email" v-model="email" type="email" placeholder="Email" required/><br>
        <div>
            <label for="select-club">Club</label>
            <select id="select-club" v-model="club" :style="{ color: clubcolor }" @change="setColor('club')" required>
                <option disabled value="">Selecteer een club</option>
                <option value="GEK">GEK</option>
                <option value="ONA">ONA</option>
                <option value="Jannao">Jannao</option>
            </select>
        </div>
        <div>
            <label for="select-licentie">Licentie</label>
            <select id="select-licentie" v-model="licentie" :style="{ color: licentiecolor }" @change="setColor('licentie')" required>
                <option disabled value="">?</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
        </div>
        <div class="button-wrapper">
            <button @click="handleUpdateLid">Opslaan</button>
        </div>
    </div>


</template>

<script>
import image from './assets/photos/wmemelink.jpg'

// image upload example: https://www.bezkoder.com/node-js-upload-store-images-mongodb/

export default {
    name: "Leden",
    data() {
        return {
            profielafbeelding: image,
            clubpreselected: "",
            clubprecolor: "",
            lidselected: "",
            lidcolor: "",
            clubcolor: "",
            licentiecolor: "",
            lidsinds: String,
            achternaam: String,
            voornaam: String,
            adres: String,
            postcode: String,
            woonplaats: String,
            geboortedatum: String,
            email: String,
            club: String,
            licentie: String,
            isEditMode: false
        }
    },
    async created() {
        const lidData = await this.fetchLid()
        this.lidsinds = lidData.lidsinds
        this.achternaam = lidData.achternaam
        this.voornaam = lidData.voornaam
        this.adres = lidData.adres
        this.postcode = lidData.postcode
        this.woonplaats = lidData.woonplaats
        this.geboortedatum = lidData.geboortedatum
        this.email = lidData.email
        this.club = lidData.club
        this.licentie = lidData.licentie
       
    },
    methods: {
        setColor(elmnt) {
            switch(elmnt) {
                case 'clubpre':
                    this.clubprecolor = "black"
                    break
                case 'lid':
                    this.lidcolor = "red"
                    break
                case 'club':
                    this.clubcolor = "black"
                    break
                case 'licentie':
                    this.licentiecolor = "black"
                    break
            }
        },
        handleEditLid() {
            this.isEditMode = true
        },
        async handleUpdateLid() {
            const payload = {
                lidsinds: this.lidsinds,
                achternaam: this.achternaam,
                voornaam: this.voornaam,
                adres: this.adres,
                postcode: this.postcode,
                woonplaats: this.woonplaats,
                geboortedatum: this.geboortedatum,
                club: this.club,
                licentie: this.licentie,
                email: this.email
            }
            const resJson = await this.updateLid(payload)
            // console.log(resJson)            

            this.isEditMode = false
        },
        async fetchLid() {
            const res = await fetch('get-lid')
            return await res.json()
        },
        async updateLid(payload) {
            const res = await fetch('update-lid', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            return await res.json()
        }
    }         
}
    


</script>

<style>
    @import './assets/styles/formulier.css';
</style>