<template>
<h2>Meesterschappen</h2>

<div class="details">
    <p class="detail">Klasse: <span>{{ klasse }}</span></p>
    <hr>
    <p class="detail">Rondes gegooid: <span>{{ rondes1 }} / {{ rondes2 }}</span></p>
    <hr>
    <p class="detail">Positie: <span>{{ positie1 }} / {{ positie2 }}</span></p>
    <hr>
    <p class="detail">{{ scoretekst }}: <span>{{ score1 }} / {{ score2 }}</span></p>
    <hr>
    <p class="detail">Aantal negens: <span>{{ negens }}</span></p>
    <hr>
    <p class="detail">Aantal treffers: <span>{{ treffers1 }} / {{ treffers2 }}</span></p>
    <hr>
    <p class="detail">Gemiddelde: <span>{{ gemiddelde }}</span></p>
</div>
<div class="uitslagenwrapper">

    <div class="uitslagen" ref="uitslagen" v-for="i in 4" :key="i">
        <img class="face" :src="faceImage">
        
        <div class="uitslag">
            <div class="regel regel1">
                <div class="sub speler">Heijnen (Vriende.)</div>
                <div class="sub sub1">6 (+0)</div>
                <div class="sub sub2">2 (+1)</div>
            </div>
            <div class="regel regel2">
                <div class="sub sub3">426 (+19)</div>
                <div class="sub sub4">20 (+5)</div>
                <div class="sub sub5">60 (+1)</div>
                <div class="sub sub6">7.100</div>
            </div>
            <hr>
        </div>

        
    </div>


</div>
</template>

<script>
import face from "./assets/face_FILL0_wght400_GRAD0_opsz48.png"
export default {
    name: "Competitie",    
    data() {
        return {
            faceImage: face,
            klasse: 2,
            rondes1: 6,
            rondes2: 6,
            rondes3: 6,
            positie1: 3,
            positie2: 24,
            scoretekst: "Eindscore",
            score1: 407,
            score2: 540,
            negens: 15,
            treffers1: 59,
            treffers2: 60,
            gemiddelde: 6.783
        }
    }
}

</script>

<style>
h2 {
    margin-top: 50px;
}
.uitslagenwrapper {
    width: 100%;
    border-style: solid;
}
.uitslagen {
    
}
.uitslag {
    width: 100%;
}
.regel {
    display: flex;
}

.sub {
    font-size: small;
    width: 25%;
    text-align: center;
    padding: 5px;
}
.speler {
    font-size: medium;
    width: 50%;
    text-align: left;
}

.details {
    border-radius: 10px;
    border-width: thin;
    border-style: solid;
    margin-bottom: 50px;
}
.detail {
    padding-left: 10px;
}
.face {
    float: left;
}
</style>