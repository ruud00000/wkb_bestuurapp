<template>
<handy-uploader
    :documentAttachment.sync="handyAttachments"
    :fileUploaderType= "'simple'"
    :maxFileSize= "100"
    :imageCompressor= "true"
    :imageCompressLevel= "0.8"
    :maxFileCount= "30"
    :badgeCounter= "true"
    :thumb= "true"
    :changeFileName="true"
    :addFileDescription="true"
    :addFileTag="true"
    :cardType="'default'"
    :lang= "'custom'"
    :customLang= "customLang"
    :btnColor= "'#00796B'"
    :tags= "[   'Uitslagen', 'Data', 'Deelnemers', 'Leden', 'Clubs', 'Website', 'Documenten',
                'WKB competitie', 'Meesterschappen', 
                'Dames', 'Heren', 
                'Klasse A', 'Klasse B', 'Klasse C', 
                'Individueel', 'Team', 
                'Open klasse', '2e klasse', '3e klasse', 
                'Ronde 1', 'Ronde 2', 'Ronde 3', 'Ronde 4', 'Ronde 5', 'Ronde 6',
                'Verslag', 'Besluit', 'Informatie', 'Verzoek', 'Archief',
                'Persbericht', 'Perspublicatie', 'OntvangenNieuws',
                'Gepland Toernooi', 'Toernooi Uitslagen']">
</handy-uploader>
</template>
<!--    :fileAccept="application/pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
-->
<script>
import handyUploader from 'handy-uploader/src/components/handyUploader'

export default {
    name: "Uitslagen",
    components: {
        handyUploader
    },
    data: () => ({
        handyAttachments: [],
        customLang : {
              custom : {
                insertFile: 'Insert File',
                insertNewFile: 'Insert New File1',
                add: 'Voeg toe',
                delete: 'Verwijder',
                edit: 'Wijzig',
                deleteDialog: {
                  message: 'Bevestig verwijderen van bestand',
                  cancel: 'Terug',
                },
                table: {
                  thumb: 'Thumb',
                  name: 'Name',
                  size: 'Size',
                  tags: 'tags',
                  action: {
                    action: 'Action',
                    deleteTooltip: 'Delete'
                  }
                },
                size: {
                  kb: 'KB',
                  mb: 'MB',
                },
                maxFileSizeAlert: 'Maximale bestandsgrootte is',
                maxFileCountAlert: 'Max aantal bestanden is',
                fileName: 'Bestandsnaam',
                fileDescription: 'Bestandsbeschrijving',
                fileTags: 'Bestands Tags',
            }
        }
    })

}


</script>

<style>

</style>