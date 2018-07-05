const prefecturesData = new Array("Beyla", "Boffa", "Boké", "Coyah", "Dabola", "Dalaba", "Dinguiraye", "Dubréka", "Faranah", "Forécariah", "Fria", "Gaoual", "Guéckédou", "Kankan", "Kérouane", "Kindia", "Kissidougou", "Koubia", "Koundara", "Kouroussa", "Labé", "Lélouma", "Lola", "Macenta", "Mali", "Mamou", "Mandiana", "Nzérékoré", "Pita", "Siguiri", "Télimélé", "Tougué", "Yomou")
const regionsData = new Array("Conakry", "Boké", "Kindia", "Mamou", "Faranah", "Kankan", "Labé", "N'Zérékoré")
const sousprefecturesData = new Array("Boffa-Centre", "Colia","Doupro", "Koba-Tatema","Lisso", "Mankountan", "Tamita", "Tougnifili", "Bintimodiya", "Boke-Centre", "Dabiss", "Kamsar", "Kanfarande", "Kolaboui", "Malapouyah", "Sangaredi", "Sansale", "Tanene", "Baguinet", "Banguingny", "Fria-Centre", "Tormelin", "Foulamory", "Gaoual-Centre", "Kakony", "Koumbia", "Kounsitel", "Malanta", "Touba", "Wendou M'bour", "Guingan", "Kamaby", "Koundara-Centre", "Sambailo", "Sareboido","Termesse","Youkounkoun","Dixinn","Kaloum","Matam","Matoto","Ratoma","Arfamoussaya","Banko","Bissikrima","Dabola-centre","Dogomet","Kankama","Kindoye","Konindou","N'Dema","Banora","Dialakoro","Diatifere","Dinguiraye-centre","Gagnakali","Kalinko","Lansanya","Selouma","Banian","Beindou","Faranah-centre","Gnaleah","Heremakonon","Kobikoro","Maréla","Passayah","sandeniah","Songoyah","Tindo","Tiro","Albadariah","Banama","Bardou","Beindou","Fermesadou","Firawa (Yomadou)","Gbangbadou","kissidougou Centre","Koundiatou","Manfran","Sangardo","Yende-Millimou","Yombiro","Balandougou","Bate-nafadji","Boula","Gberedou-Baranama","Kankan-centre","Karifamoriyah","Koumban","Mamouroudou","Missamana","Moribayah","Sabadou-Baranama","Tinti-Oulen","Tokounou","Banankoro","Damaro","Kereouane centre","Komodou","Kounsankoro","Linko","Sibiribaro","Soromaya","Babila","Balato","Banfele","Baro","Cissela","Douako","Doura","Kiniero","Komola-Koura","Koumana","Kouroussa centre","Sanguiana","Balandougouba","Dialakoro","Faralako","Kantoumanina","Kinieran","Kondianakoro","Koundian","Mandiana-centre","Morodou","Niantania","Saladou","Sansando","Bankon","Doko","Franwalia","Kiniebakoura","Kintinian","Malea","Naboun","Niagassola","Niandankoro","Norassoba","Nounkounkan","Siguiri-centre","Siguirini","Coyah centre","Kouriya","Maneah","Wonkifong","Badi","Dubreka-centre","Falessade","Khorira","Ouassou","Tanene","Tondon","Alassoya","Benty","Farmoriah","Forecareah Centre","Kaback","Kakossa","Kallia","Maferenya","Moussaya","Sikhourou","Bangouyah","Damankanyah","Friguiagbe","Kindia centre","Kolente","Lynsan","Madina Oula","Mambiya","Molota","Samayah","Sougueta","Bourouwal","Daramagnaky","Gougoudje","Koba","Kollet","Konsotamy","Missira","Santou","Sarekaly","Sinta","Sogolon","Tarihoye","Telimele centre","Thionthian","Fafaya","Gadha Woundou","Koubia centre","Matakaou","Missira","Pilimini","Dalein","Daralabe","Diari","Dionfo","Garambe","Hafia","Kaalan","Kouramangui","Labé centre","Noussy","Popodara","Sannoun","Taranbaly","Tountouroun","Balaya","Djountou","Herico","Korbe","Lafou","Lelouma centre","Linsansaran","Manda","Parawol","Sagale","Tyanguel-Bori","Balaki","Donghol Sigon","Dougountouny","Fougou","Gayah","Hidayatou","Lebekere","Madina Wora","Mali centre","Salambande","Telire","Touba","Yembereng","Fatako","Fello Koundoua","Kansangui","Kolangui","Kollet","Konah","Kouratongo","Koyin","Tangaly","Tougue centre","Bodié","Dalaba centre","Ditinn","Kaalan","Kankalabe","Kebali","Koba","Mafara","Mitty","Mombeyah","Bouliwel","Dounet","Gongoret","Kegneko","Konkoure","Mamou centre","Nyagara","Oure Kaba","Poredaka","Saramoussaya","Soyah","Teguereya","Timbo","Tolo","Bantignel","Bourouwal Tappe","Dongol Touma","Gongore","Ley-Miro","Maci","Ninguelande","Pita centre","Sangareah","Sintaly","Timbi-Madina","Timbi-Touny","Beyla centre","Boola","Diarraguerela","Diassadou","Fouala","Gbackédou","Gbéssoba","karala","Koumandou","Mousadou","Nionsomoridou","Samana","Sinko","Sokourala","Bolodou","Fangamadou","Guéckédou centre","Guéndembou","Kassadou","Koundou","Nongoa","Ouendé Kénéma","Tékoulo","Terméssadou Djibo","Bossou","Foumbadou","Gama Berema","Guéassou","Kokota","Laine","Lola centre","N'Zoo","Tounkarata","Balizia","Binikala","Bofossou","Daro","Fassankoni","kouankan","Koyama","Macenta centre","N'Zébéla","Orémaï","Panziazou","Semgbédou","Sérédou","Vasérédou","Watanka","Bounouma","Gouécké","Kobéla","Koropara","Koulé","N'Zérékoré centre","Palé","Samoé","Soulouma","Womey","Yalenzou","Banié","Bheta","Bignamou","Bowé","Diécké","Péla","Yomou centre")
const communesData = new Array("Dixinn", "Kaloum", "Matam", "Matoto", "Ratoma")
const quartiersData = new Array("Almamya", "Béanzin", "Belle-vue école", "Belle-vue-marché", "Boulbinet", "Bonfi", "Bonfi-marché", "Boussoura", "Camayenne", "Cameroun", "Camp Alpha Yaya Diallo", "Carrière", "Citée de l'air", "Cobaya", "Coléah-centre", "Coléah-cité", "Coronthie", "Dabompa", "Dabondy 1", "Dabondy 2", "Dabondy 3", "Dabondyécole", "Dabondy-rails", "Dar-es-salam", "Dixinn-cité1", "Dixinn-cité 2", "Dixinn-gare", "Dixinn-gare-rails", "Dixinn-mosquée", "Dixinn-port", "Domino", "Fotoba", "Gbéssia-centre", "Gbéssia-cité 1", "Gbessia-cité 2", "Gbessia-cité 3", "Gbéssia-école", "Gbéssia-port 1", "Gbéssia-port 2", "Hafia 1", "Hafia 2", "Hafia-minière", "Hafia-mosquée", "Hamdalaye 1", "Hamdalaye 2", "Hamdalaye-mosquée", "Hermakönon", "Imprimerie", "Kaporo-centre", "Kaporo-rails", "Kassa", "Kénien", "Kipé", "Kissosso", "Koloma 1", "Koloma 2", "Kouléwondy", "Lambadji", "Landréah", "Lanséboudji", "Madina-centre", "Madina-cité", "Madina-école", "Madina-marché", "Madina-mosquée", "Mafanco", "Mafonco-centre", "Manquepas", "Matam", "Matam-lido", "Matoto-centre", "Matoto-marché", "Minière-cité", "Nongo", "Ratoma-centre", "Ratoma-dispensaire", "Sandervalia", "Sangoya-mosquée", "Sans-fil", "Simbaya 1", "Simbaya 2", "Simbaya-gare", "Sonfonia-gare", "Tanéné-marché", "Tanéné-mosquée", "Taouyah", "Témitaye", "Tombo", "Tombolia", "Touguiwondy", "Wanindara", "Yattayah", "Yimbaya-école", "Yimbaya-permanence", "Yimbaya-tannerie")
const quartierByCommuneData = [
    {
        "commune": "DIXINN",
        "quartiers": ["Belle-vue école", "Belle-vue-marché", "Camayenne", "Cameroun", "Dixinn-cité1", "Dixinn-cité 2", "Dixinn-gare", "Dixinn-gare-rails", "Dixinn-mosquée", "Dixinn-port", "Hafia 1", "Hafia 2", "Hafia-minière", "Hafia-mosquée", "Kénien", "Landréah", "Minière-cité"]
    },
    {
        "commune": "KALOUM",
        "quartiers": ["Almamya", "Boulbinet", "Coronthie", "Fotoba", "Kassa", "Kouléwondy", "Manquepas", "Sandervalia", "Sans-fil", "Témitaye", "Tombo"]
    },
    {
        "commune": "MATAM",
        "quartiers": ["Boussoura", "Bonfi", "Bonfi-marché", "Carrière", "Coléah-centre", "Coléah-cité", "Domino", "Hermakönon", "Imprimerie", "Lanséboudji", "Madina-centre", "Madina-cité", "Madina-école", "Madina-marché", "Madina-mosquée", "Mafanco", "Mafonco-centre", "Matam", "Matam-lido", "Touguiwondy"]
    },
    {
        "commune": "RATOMA",
        "quartiers": ["Cobaya", "Dar-es-salam", "Hamdalaye 1", "Hamdalaye 2", "Hamdalaye-mosquée", "Kaporo-centre", "Kaporo-rails", "Kipé", "Koloma 1", "Koloma 2", "Lambadji", "Nongo", "Ratoma-centre", "Ratoma-dispensaire", "Simbaya-gare", "Sonfonia-gare", "Taouyah", "Wanindara", "Yattayah"]
    },
    {
        "commune": "MATOTO",
        "quartiers": ["Béanzin", "Camp Alpha Yaya Diallo", "Citée de l'air", "Dabompa", "Dabondy 1", "Dabondy 2", "Dabondy 3", "Dabondy-école", "Dabondy-rails", "Dar-es-salam", "Gbéssia-centre", "Gbéssia-cité 1", "Gbessia-cité 2", "Gbessia-cité 3", "Gbéssia-école", "Gbéssia-port 1", "Gbéssia-port 2", "Kissosso", "Matoto-centre", "Matoto-marché", "Sangoya-mosquée", "Simbaya 1", "Simbaya 2", "Tanéné-marché", "Tanéné-mosquée", "Tombolia", "Yimbaya-école", "Yimbaya-permanence", "Yimbaya-tannerie"]
    }
]
const sousprefecturesByPrefectureData = [
    {
        "prefecture": "BOFFA",
        "sous_prefecture": ["Boffa-Centre", "Colia","Doupro", "Koba-Tatema", "Lisso", "Mankountan", "Tamita", "Tougnifili"]
    },
    {
        "prefecture": "BOKE",
        "sous_prefecture": ["Bintimodiya", "Boke-Centre", "Dabiss", "Kamsar", "Kanfarande", "Kolaboui", "Malapouyah", "Sangaredi", "Sansale", "Tanene"]
    },
    {
        "prefecture": "FRIA",
        "sous_prefecture": ["Baguinet", "Banguingny", "Fria-Centre", "Tormelin"]
    },
    {
        "prefecture": "GAOUAL",
        "sous_prefecture": ["Foulamory", "Gaoual-Centre", "Kakony", "Koumbia", "Kounsitel", "Malanta", "Touba", "Wendou M'bour"]
    },
    {
        "prefecture": "KOUNDARA",
        "sous_prefecture": ["Guingan", "Kamaby", "Koundara-Centre", "Sambailo", "Sareboido", "Termesse","Youkounkoun"]
    },
    {
        "prefecture": "DABOLA",
        "sous_prefecture": ["Arfamoussaya","Banko","Bissikrima","Dabola-centre","Dogomet","Kankama","Kindoye","Konindou","N'Dema"]
    },
    {
        "prefecture": "DINGUIRAYE",
        "sous_prefecture": ["Banora","Dialakoro","Diatifere","Dinguiraye-centre","Gagnakali","Kalinko","Lansanya","Selouma"]
    },
    {
        "prefecture": "FARANAH",
        "sous_prefecture": ["Banian","Beindou","Faranah-centre","Gnaleah","Heremakonon","Kobikoro","Maréla","Passayah","sandeniah","Songoyah","Tindo","Tiro"]
    },
    {
        "prefecture": "KISSIDOUGOU",
        "sous_prefecture": ["Albadariah","Banama","Bardou","Beindou","Fermesadou","Firawa (Yomadou)","Gbangbadou","kissidougou Centre","Koundiatou","Manfran","Sangardo","Yende-Millimou","Yombiro"]
    },
    {
        "KANKAN": ["Balandougou","Bate-nafadji","Boula","Gberedou-Baranama","Kankan-centre","Karifamoriyah","Koumban","Mamouroudou","Missamana","Moribayah","Sabadou-Baranama","Tinti-Oulen","Tokounou"]
    },
    {
        "prefecture": "KEROUANE",
        "sous_prefecture": ["Banankoro","Damaro","Kereouane centre","Komodou","Kounsankoro","Linko","Sibiribaro","Soromaya"]
    },
    {
        "prefecture": "KOUROUSSA",
        "sous_prefecture": ["Babila","Balato","Banfele","Baro","Cissela","Douako","Doura","Kiniero","Komola-Koura","Koumana","Kouroussa centre","Sanguiana"]
    },
    {
        "prefecture": "MANDIANA",
        "sous_prefecture": ["Balandougouba","Dialakoro","Faralako","Kantoumanina","Kinieran","Kondianakoro","Koundian","Mandiana-centre","Morodou","Niantania","Saladou","Sansando"]
    },
    {
        "prefecture": "SIGUIRI",
        "sous_prefecture": ["Bankon","Doko","Franwalia","Kiniebakoura","Kintinian","Malea","Naboun","Niagassola","Niandankoro","Norassoba","Nounkounkan","Siguiri-centre","Siguirini"]
    },
    {
        "prefecture": "COYAH",
        "sous_prefecture": ["Coyah centre","Kouriya","Maneah","Wonkifong"]
    },
    {
        "prefecture": "DUBREKA",
        "sous_prefecture": ["Badi","Dubreka-centre","Falessade","Khorira","Ouassou","Tanene","Tondon"]
    },
    {
        "prefecture": "FORECARIAH",
        "sous_prefecture": ["Alassoya","Benty","Farmoriah","Forecareah Centre","Kaback","Kakossa","Kallia","Maferenya","Moussaya","Sikhourou"]
    },
    {
        "prefecture": "KINDIA",
        "sous_prefecture": ["Bangouyah","Damankanyah","Friguiagbe","Kindia centre","Kolente","Lynsan","Madina Oula","Mambiya","Molota","Samayah","Sougueta"]
    },
    {
        "prefecture": "TELIMELE",
        "sous_prefecture": ["Bourouwal","Daramagnaky","Gougoudje","Koba","Kollet","Konsotamy","Missira","Santou","Sarekaly","Sinta","Sogolon","Tarihoye","Telimele centre","Thionthian"]
    },
    {
        "prefecture": "KOUBIA",
        "sous_prefecture": ["Fafaya","Gadha Woundou","Koubia centre","Matakaou","Missira","Pilimini"]
    },
    {
        "prefecture": "LABE",
        "sous_prefecture": ["Dalein","Daralabe","Diari","Dionfo","Garambe","Hafia","Kaalan","Kouramangui","Labé centre","Noussy","Popodara","Sannoun","Taranbaly","Tountouroun"]
    },
    {
        "prefecture": "LELOUMA",
        "sous_prefecture": ["Balaya","Djountou","Herico","Korbe","Lafou","Lelouma centre","Linsansaran","Manda","Parawol","Sagale","Tyanguel-Bori"]
    },
    {
        "prefecture": "MALI",
        "sous_prefecture": ["Balaki","Donghol Sigon","Dougountouny","Fougou","Gayah","Hidayatou","Lebekere","Madina Wora","Mali centre","Salambande","Telire","Touba","Yembereng"]
    },
    {
        "prefecture": "TOUGUE",
        "sous_prefecture": ["Fatako","Fello Koundoua","Kansangui","Kolangui","Kollet","Konah","Kouratongo","Koyin","Tangaly","Tougue centre"]
    },
    {
        "prefecture": "DALABA",
        "sous_prefecture": ["Bodié","Dalaba centre","Ditinn","Kaalan","Kankalabe","Kebali","Koba","Mafara","Mitty","Mombeyah"]
    },
    {
        "prefecture": "MAMOUN",
        "sous_prefecture": ["Bouliwel","Dounet","Gongoret","Kegneko","Konkoure","Mamou centre","Nyagara","Oure Kaba","Poredaka","Saramoussaya","Soyah","Teguereya","Timbo","Tolo"]
    },
    {
        "prefecture": "PITA",
        "sous_prefecture": ["Bantignel","Bourouwal Tappe","Dongol Touma","Gongore","Ley-Miro","Maci","Ninguelande","Pita centre","Sangareah","Sintaly","Timbi-Madina","Timbi-Touny"]
    },
    {
        "prefecture": "BEYLA",
        "sous_prefecture": ["Beyla centre","Boola","Diarraguerela","Diassadou","Fouala","Gbackédou","Gbéssoba","karala","Koumandou","Mousadou","Nionsomoridou","Samana","Sinko","Sokourala"]
    },
    {
        "prefecture": "GUECKEDOU",
        "sous_prefecture": ["Bolodou","Fangamadou","Guéckédou centre","Guéndembou","Kassadou","Koundou","Nongoa","Ouendé Kénéma","Tékoulo","Terméssadou Djibo"]
    },
    {
        "prefecture": "LOLA",
        "sous_prefecture": ["Bossou","Foumbadou","Gama Berema","Guéassou","Kokota","Laine","Lola centre","N'Zoo","Tounkarata"]
    },
    {
        "prefecture": "MACENTA",
        "sous_prefecture": ["Balizia","Binikala","Bofossou","Daro","Fassankoni","Kouankan","Koyama","Macenta centre","N'Zébéla","Orémaï","Panziazou","Semgbédou","Sérédou","Vasérédou","Watanka"]
    },
    {
        "prefecture": "N'ZEREKORE",
        "sous_prefecture": ["Bounouma","Gouécké","Kobéla","Koropara","Koulé","N'Zérékoré centre","Palé","Samoé","Soulouma","Womey","Yalenzou"]
    },
    {
        "prefecture": "YOMOU",
        "sous_prefecture": ["Banié","Bheta","Bignamou","Bowé","Diécké","Péla","Yomou centre"]
    }
]

module.exports = {
    getRegions: function(){
        return regionsData
    },
    getPrefectures: function(){
        return prefecturesData
    },
    getSousprefectures: function(){
        return sousprefecturesData
    },
    getCommunes: function(){
        return communesData
    },
    getQuartiers: function(){
        return quartiersData
    },
    getSousprefecturesByPrefecture: function(data){
        data = data.toUpperCase()
        return sousprefecturesByPrefectureData.filter(function(sousprefecturesByPrefectureData){
            return sousprefecturesByPrefectureData.prefecture == data
        })
    },
    getQuartiersByCommune: function(data){
        data = data.toUpperCase()
        return quartierByCommuneData.filter(function(quartierByCommuneData){
            return quartierByCommuneData.commune == data
        })
    }
}