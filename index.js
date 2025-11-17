// Données des recettes
const recipes = [
    // Entrées
    {id:1, name:"Salade César", category:"Entrées", subcategory:"Salades composées", time:15, difficulty:"facile", ingredients:["Laitue 100g","Poulet 150g","Parmesan 20g","Croutons 30g"], utensils:["Saladier","Couteau"], steps:["Couper la laitue","Cuire le poulet","Mélanger tous les ingrédients"], image:"images/salade_cesar.jpg"},
    {id:2, name:"Soupe de carottes", category:"Entrées", subcategory:"Soupes", time:25, difficulty:"facile", ingredients:["Carottes 300g","Oignon 50g","Bouillon 500ml"], utensils:["Casserole","Mixeur"], steps:["Éplucher et couper les carottes","Faire revenir l'oignon","Cuire dans le bouillon 20 min","Mixer"], image:"images/soupe_carottes.jpg"},
    {id:3, name:"Bruschetta", category:"Entrées", subcategory:"Finger food", time:10, difficulty:"facile", ingredients:["Pain 4 tranches","Tomates 100g","Basilic 5g","Huile d'olive 10ml"], utensils:["Four","Couteau"], steps:["Couper les tomates","Torréfier le pain","Assembler et servir"], image:"images/bruschetta.jpg"},
    {id:4, name:"Velouté de champignons", category:"Entrées", subcategory:"Soupes", time:30, difficulty:"moyen", ingredients:["Champignons 250g","Oignon 50g","Crème 50ml"], utensils:["Casserole","Mixeur"], steps:["Faire revenir l'oignon","Ajouter les champignons","Cuire 20 min","Mixer et ajouter la crème"], image:"images/veloute_champignons.jpg"},
    {id:5, name:"Taboulé", category:"Entrées", subcategory:"Légères", time:20, difficulty:"facile", ingredients:["Boulgour 100g","Tomates 100g","Persil 10g","Citron 20ml"], utensils:["Saladier","Couteau"], steps:["Cuire le boulgour","Couper les légumes","Mélanger avec le persil et le citron"], image:"images/taboule.jpg"},

    // Plats
    {id:6, name:"Pâtes Bolognaise", category:"Plats", subcategory:"Rapide", time:25, difficulty:"facile", ingredients:["Pâtes 200g","Viande hachée 150g","Tomate 150g"], utensils:["Casserole","Poêle"], steps:["Cuire les pâtes","Cuire la viande","Ajouter la sauce tomate"], image:"images/pates_bolo.jpg"},
    {id:7, name:"Quiche aux légumes", category:"Plats", subcategory:"Végétarien", time:40, difficulty:"moyen", ingredients:["Pâte brisée 1","Courgette 100g","Oeufs 2","Crème 100ml"], utensils:["Four","Moule"], steps:["Préparer la pâte","Couper les légumes","Mélanger oeufs et crème","Cuire 30 min"], image:"images/quiche_legumes.jpg"},
    {id:8, name:"Curry de pois chiches", category:"Plats", subcategory:"Végétarien", time:35, difficulty:"moyen", ingredients:["Pois chiches 200g","Curry 10g","Tomates 100g"], utensils:["Casserole","Cuillère en bois"], steps:["Faire revenir les épices","Ajouter les pois chiches","Cuire 20 min"], image:"images/curry_pois_chiches.jpg"},
    {id:9, name:"Gratin de pommes de terre", category:"Plats", subcategory:"Familial", time:60, difficulty:"difficile", ingredients:["Pommes de terre 500g","Crème 200ml","Fromage 100g"], utensils:["Four","Râpe"], steps:["Éplucher et couper les pommes de terre","Mélanger avec crème et fromage","Cuire 45 min"], image:"images/gratin_pdt.jpg"},
    {id:10, name:"Omelette rapide", category:"Plats", subcategory:"Étudiant", time:10, difficulty:"facile", ingredients:["Oeufs 3","Lait 50ml","Sel","Poivre"], utensils:["Poêle","Fouet"], steps:["Battre les oeufs et le lait","Cuire dans la poêle"], image:"images/omelette.jpg"},

    // Apéros
    {id:11, name:"Mini sandwichs", category:"Apéros", subcategory:"Mini-sandwichs", time:15, difficulty:"facile", ingredients:["Pain 4 tranches","Jambon 2 tranches","Fromage 2 tranches"], utensils:["Couteau"], steps:["Assembler les ingrédients","Couper en petits carrés"], image:"images/mini_sandwich.jpg"},
    {id:12, name:"Houmous", category:"Apéros", subcategory:"Dips", time:10, difficulty:"facile", ingredients:["Pois chiches 200g","Tahini 20g","Citron 10ml"], utensils:["Mixeur"], steps:["Mixer tous les ingrédients"], image:"images/houmous.jpg"},
    {id:13, name:"Guacamole", category:"Apéros", subcategory:"Dips", time:10, difficulty:"facile", ingredients:["Avocat 2","Oignon 20g","Citron 10ml"], utensils:["Couteau","Bol"], steps:["Écraser les avocats","Mélanger avec oignon et citron"], image:"images/guacamole.jpg"},
    {id:14, name:"Brochettes apéritives", category:"Apéros", subcategory:"Finger food", time:20, difficulty:"moyen", ingredients:["Tomates cerise 100g","Mozzarella 100g","Basilic 5g"], utensils:["Cure-dents"], steps:["Assembler tomates et mozzarella sur cure-dents","Ajouter basilic"], image:"images/brochettes.jpg"},
    {id:15, name:"Tartinade de poivrons", category:"Apéros", subcategory:"Tartinades", time:15, difficulty:"facile", ingredients:["Poivrons 150g","Ail 1 gousse","Huile 10ml"], utensils:["Four","Mixeur"], steps:["Rôtir les poivrons","Mixer avec ail et huile"], image:"images/tartinade_poivrons.jpg"},

    // Desserts
    {id:16, name:"Tiramisu", category:"Desserts", subcategory:"Gâteau", time:30, difficulty:"moyen", ingredients:["Biscuits 100g","Mascarpone 100g","Café 50ml"], utensils:["Bol","Fouet"], steps:["Tremper biscuits dans café","Alterner avec mascarpone","Réfrigérer 2h"], image:"images/tiramisu.jpg"},
    {id:17, name:"Glace vanille", category:"Desserts", subcategory:"Glace", time:10, difficulty:"facile", ingredients:["Lait 200ml","Sucre 50g","Vanille 1gousse"], utensils:["Sorbetière"], steps:["Mélanger les ingrédients","Turbiner 30 min"], image:"images/glace_vanille.jpg"},
    {id:18, name:"Crème brûlée", category:"Desserts", subcategory:"Crème dessert", time:40, difficulty:"difficile", ingredients:["Crème 200ml","Sucre 50g","Oeuf 2"], utensils:["Four","Ramequins"], steps:["Mélanger crème et oeufs","Cuire au bain-marie 30 min","Caraméliser le sucre"], image:"images/creme_brulee.jpg"},
    {id:19, name:"Tarte aux pommes", category:"Desserts", subcategory:"Au fruit", time:50, difficulty:"moyen", ingredients:["Pâte 1","Pommes 3","Sucre 30g"], utensils:["Four","Moule"], steps:["Étaler la pâte","Disposer les pommes","Cuire 35 min"], image:"images/tarte_pommes.jpg"},
    {id:20, name:"Cupcakes chocolat", category:"Desserts", subcategory:"Gâteau individuel", time:25, difficulty:"facile", ingredients:["Farine 100g","Chocolat 50g","Oeufs 2"], utensils:["Four","Moule à cupcakes"], steps:["Mélanger les ingrédients","Cuire 20 min"], image:"images/cupcakes.jpg"},

    // Boissons
    {id:21, name:"Smoothie fraise-banane", category:"Boissons", subcategory:"Smoothies", time:5, difficulty:"facile", ingredients:["Fraises 100g","Banane 1","Lait 100ml"], utensils:["Mixeur"], steps:["Mixer tous les ingrédients"], image:"images/smoothie.jpg"},
    {id:22, name:"Mojito", category:"Boissons", subcategory:"Cocktails", time:10, difficulty:"moyen", ingredients:["Menthe 10g","Citron 10ml","Rhum 50ml","Eau gazeuse 100ml"], utensils:["Verre","Cuillère"], steps:["Écraser la menthe","Ajouter les liquides"], image:"images/mojito.jpg"},
    {id:23, name:"Chocolat chaud", category:"Boissons", subcategory:"Chaudes", time:5, difficulty:"facile", ingredients:["Lait 200ml","Chocolat 50g"], utensils:["Casserole","Fouet"], steps:["Faire chauffer le lait","Ajouter le chocolat"], image:"images/chocolat_chaud.jpg"},
    {id:24, name:"Thé glacé", category:"Boissons", subcategory:"Froides", time:5, difficulty:"facile", ingredients:["Thé 200ml","Glace 50g","Citron 10ml"], utensils:["Verre"], steps:["Préparer le thé","Ajouter glace et citron"], image:"images/the_glace.jpg"},
    {id:25, name:"Detox citron-gingembre", category:"Boissons", subcategory:"Detox", time:5, difficulty:"facile", ingredients:["Citron 1","Gingembre 5g","Eau 200ml"], utensils:["Mixeur"], steps:["Mixer tous les ingrédients"], image:"images/detox.jpg"},
];

// LocalStorage pour commentaires et notes
let comments = JSON.parse(localStorage.getItem("comments")) || {};
let ratings = JSON.parse(localStorage.getItem("ratings")) || {};

const categoriesDiv = document.querySelector(".category-list");
const recipesDiv = document.getElementById("recipes");
const recipeDetailDiv = document.getElementById("recipeDetail");
const showCategoriesBtn = document.getElementById("showCategoriesBtn");
const searchInput = document.getElementById("searchInput");
const filterTime = document.getElementById("filterTime");
const filterDifficulty = document.getElementById("filterDifficulty");

// Générer les catégories
const categories = [...new Set(recipes.map(r=>r.category))];
categories.forEach(cat => {
    const catCard = document.createElement("div");
    catCard.classList.add("category-card");
    catCard.innerHTML = `<h3>${cat}</h3>`;
    catCard.addEventListener("click", ()=> showSubcategories(cat));
    categoriesDiv.appendChild(catCard);
});

// Afficher sous-catégories
function showSubcategories(cat) {
    const subcats = [...new Set(recipes.filter(r=>r.category===cat).map(r=>r.subcategory))];
    recipesDiv.innerHTML = "";
    subcats.forEach(sub=>{
        const subDiv = document.createElement("div");
        subDiv.innerHTML = `<h3>${sub}</h3>`;
        recipes.filter(r=>r.category===cat && r.subcategory===sub).forEach(recipe => {
            const rCard = document.createElement("div");
            rCard.classList.add("recipe-card");
            rCard.innerHTML = `<img src="${recipe.image}" alt="${recipe.name}"><h4>${recipe.name}</h4>`;
            rCard.addEventListener("click", ()=> showRecipeDetail(recipe.id));
            subDiv.appendChild(rCard);
        });
        recipesDiv.appendChild(subDiv);
    });
}

// Afficher détail recette
function showRecipeDetail(id) {
    const recipe = recipes.find(r=>r.id===id);
    recipeDetailDiv.innerHTML = `<h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}">
        <h3>Ingrédients :</h3><ul>${recipe.ingredients.map(i=>`<li>${i}</li>`).join("")}</ul>
        <h3>Ustensiles :</h3><ul>${recipe.utensils.map(u=>`<li>${u}</li>`).join("")}</ul>
        <h3>Étapes :</h3><ol>${recipe.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
        <p>Temps : ${recipe.time} min | Difficulté : ${recipe.difficulty}</p>
        <div class="comment-section">
            <h3>Commentaires</h3>
            <input type="text" id="commentInput" placeholder="Votre commentaire">
            <button onclick="addComment(${id})">Ajouter</button>
            <div id="commentList">${(comments[id]||[]).map(c=>`<div class="comment">${c}</div>`).join("")}</div>
            <h3>Notation</h3>
            <select id="ratingSelect">
                <option value="">Noter</option>
                <option value="1">1⭐</option>
                <option value="2">2⭐</option>
                <option value="3">3⭐</option>
                <option value="4">4⭐</option>
                <option value="5">5⭐</option>
            </select>
            <button onclick="addRating(${id})">Valider</button>
            <p>Note moyenne : ${ratings[id]? (ratings[id].reduce((a,b)=>a+b,0)/ratings[id].length).toFixed(1) : "Pas encore"}</p>
        </div>`;
    recipeDetailDiv.classList.remove("hidden");
    recipesDiv.scrollIntoView();
}

// Ajouter commentaire
function addComment(id){
    const input = document.getElementById("commentInput");
    if(!input.value) return;
    if(!comments[id]) comments[id]=[];
    comments[id].push(input.value);
    localStorage.setItem("comments", JSON.stringify(comments));
    showRecipeDetail(id);
}

// Ajouter note
function addRating(id){
    const select = document.getElementById("ratingSelect");
    if(!select.value) return;
    if(!ratings[id]) ratings[id]=[];
    ratings[id].push(Number(select.value));
    localStorage.setItem("ratings", JSON.stringify(ratings));
    showRecipeDetail(id);
}

// Bouton afficher catégories
showCategoriesBtn.addEventListener("click", ()=>{
    categoriesDiv.parentElement.classList.remove("hidden");
    recipesDiv.innerHTML="";
    recipeDetailDiv.classList.add("hidden");
});

// Recherche et filtres
function displayRecipes(){
    let filtered = recipes.filter(r=>{
        const searchText = searchInput.value.toLowerCase();
        return r.name.toLowerCase().includes(searchText);
    });
    if(filterTime.value) filtered = filtered.filter(r=>r.time <= Number(filterTime.value));
    if(filterDifficulty.value) filtered = filtered.filter(r=>r.difficulty===filterDifficulty.value);

    recipesDiv.innerHTML="";
    filtered.forEach(r=>{
        const rCard = document.createElement("div");
        rCard.classList.add("recipe-card");
        rCard.innerHTML = `<img src="${r.image}" alt="${r.name}"><h4>${r.name}</h4>`;
        rCard.addEventListener("click", ()=> showRecipeDetail(r.id));
        recipesDiv.appendChild(rCard);
    });
}

searchInput.addEventListener("input", displayRecipes);
filterTime.addEventListener("change", displayRecipes);
filterDifficulty.addEventListener("change", displayRecipes);
