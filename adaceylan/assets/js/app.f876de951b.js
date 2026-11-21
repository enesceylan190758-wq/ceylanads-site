(function(){document.querySelectorAll('img').forEach(function(i){function f(){i.style.opacity=0}if(i.complete&&i.getAttribute('src')&&i.naturalWidth===0)f();i.addEventListener('error',f)})})();
/* Static text translation (TR -> EN) for elements without data-i18n keys */
(function(){
var TX={
"Erenler · Sakarya":"Erenler · Sakarya","Sakarya 1. OSB":"Sakarya 1st OIZ","Adrese servis":"Delivery","Adrese Servis":"Delivery",
"Kaynak Makinesi":"Welding Machine","Kaynak":"Welding","Elektrod":"Electrodes","Kaynak Teli":"Welding Wire","Matkap":"Drill","Taşlama":"Grinder","Torç":"Torch","Pense":"Pliers","Anahtar":"Spanners","Hırdavat":"Hardware","El Aletleri":"Hand Tools",
"Kapat":"Close","Ara":"Call","Yana kaydırın":"Swipe sideways","Erenler OSB":"Erenler OSB"
};
function tr(s){
  var k=s.trim(); if(!k)return null;
  if(Object.prototype.hasOwnProperty.call(TX,k))return s.replace(k,TX[k]);
  var m=k.match(/^([\d.]+) TL('den)?$/);
  if(m){var v=m[1].replace(/\./g,',');return s.replace(k,m[2]?'from '+v+' TRY':v+' TRY')}
  return null;
}
var T=new WeakMap(), A=new WeakMap();
function skip(el){return !el||/^(SCRIPT|STYLE|NOSCRIPT)$/.test(el.nodeName)||el.closest('[data-i18n],#mani,#cyc,#day,#bk-lines,#bk-total')}
window.rvTx=function(lang){
  var en=lang==='en';
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n;
  while((n=w.nextNode())){
    if(skip(n.parentNode))continue;
    var st=T.get(n), cur=n.nodeValue;
    if(!st||(cur!==st.o&&cur!==st.t)){st={o:cur,t:tr(cur)};T.set(n,st)}
    if(st.t==null)continue;
    n.nodeValue=en?st.t:st.o;
  }
  document.querySelectorAll('[aria-label],[alt],[placeholder],[title]').forEach(function(el){
    ['aria-label','alt','placeholder','title'].forEach(function(at){
      if(!el.hasAttribute(at))return;
      if(at==='alt'&&el.hasAttribute('data-i18n-alt'))return;
      if(at==='aria-label'&&(el.hasAttribute('data-i18n-label')||el.classList.contains('brand')||el.id==='rv-snd'))return;
      var m=A.get(el); if(!m){m={};A.set(el,m)}
      var cur=el.getAttribute(at), st=m[at];
      if(!st||(cur!==st.o&&cur!==st.t)){st={o:cur,t:tr(cur)};m[at]=st}
      if(st.t==null)return;
      el.setAttribute(at,en?st.t:st.o);
    });
  });
};
})();

try{
(function(){
  var root=document.documentElement, $=function(s){return document.querySelector(s)};
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp=function(v){return v<0?0:v>1?1:v};


  /* ───────── content: German default, English ───────── */
  var CONTACT={whatsapp:'905492915858'};
  var I18N={tr:{
og_k:"Yetkili satış bayisi · Erenler OSB",
og_h1:"Magmaweld",
og_h2:"Yetkili Bayi.",
og_sub:"Kaynak makinesi, elektrod, kaynak teli ve torç: işinize uygun ürünü birlikte seçelim, rafta yoksa getirtelim.",
og_all:"Magmaweld",
og_big:"Yetkili",
og_cta:"Kaynak ürünü için fiyat sor",
og1:"Kaynak Makineleri",
og1s:"Örtülü elektrod, gazaltı, TIG",
og2:"Elektrodlar",
og2s:"Rutil, bazik, paslanmaz",
og3:"Kaynak Telleri",
og3s:"Gazaltı ve özlü teller",
og4:"Torç ve Sarf",
og4s:"Meme, nozul, uç",
og5:"Koruyucu Ekipman",
og5s:"Maske, eldiven, önlük",
og6:"Yedek Parça Siparişi",
og6s:"Rafta yoksa getirtilir",
og_alt:"Magmaweld yetkili bayi vitrini",
og_note:"Satış bayisiyiz; Magmaweld teknik servis hizmeti vermiyoruz.",
og_live:"08:00–18:00",
og_on:"Şu an açık",
og_soon:"Bugün 08:00'de açılıyor",
og_tom:"Yarın 08:00'de açılıyor",
og_mon:"Pazartesi 08:00'de açılıyor",
title:"Erenler OSB'de Kaynak Makineleri ve Hırdavat",
desc:"Sakarya 1. Organize Sanayi Bölgesi'nde Magmaweld yetkili satış bayisi. Kaynak makineleri, elektrod ve sarf, elektrikli el aletleri, el aletleri ve hırdavat. Hafta içi 08:00–18:00, cumartesi 08:00–16:00.",
skip:"İçeriğe geç",
home:"Ana sayfa",
top:"Yukarı çık",
nav1:"Ürünler",
nav2:"Markalar",
nav3:"Sipariş",
nav4:"Konum",
cta:"Fiyat sor",
call:"Ara",
hello:"Ada Ceylan",
days:["Pazar. Bugün kapalıyız; yarın 08:00'de açığız.", "Pazartesi. Haftaya eksiksiz başlayın; 08:00–18:00 açığız.", "Salı. Aradığınız ürün rafta; 08:00–18:00 açığız.", "Çarşamba. Siparişinizi yazın, hazırlayalım; 08:00–18:00 açığız.", "Perşembe. Kaynak sarfınız bitmeden yenileyin; 08:00–18:00 açığız.", "Cuma. Hafta sonu işleriniz için şimdiden uğrayın; 08:00–18:00 açığız.", "Cumartesi. Bugün 08:00–16:00 açığız."],
st_sr:"Erenler OSB'de ustaya lazım olan: kaynak makinesi, elektrod, matkap, el aletleri, hırdavat.",
st1:"Erenler OSB'de",
st2:"ustaya lazım:",
cyc:["kaynak makinesi.", "elektrod.", "matkap.", "el aletleri.", "hırdavat."],
mani_label:"Ada Ceylan Makina",
mani:"Atölyede, şantiyede ya da fabrikada: <em class='a'>kaynak makinesinden elektroda, matkaptan pense takımına</em> işinize lazım olan burada. Organize sanayinin içinde, güler yüzle ve doğru ürünle.",
more1:"Ürünlerimiz",
more2:"Nasıl sipariş verilir",
more3:"Fiyat sor",
ref_h:"Ne arıyorsunuz?",
ref_note:"Ürün grubunu seçin; ürün adını ya da ölçüsünü yazın, WhatsApp mesajınız hazır olsun.",
pl_h:"Raflarımızdaki markalardan",
rz:"Fiyat sorun",
o1:"Kaynak Makineleri",
o1s:"Magmaweld yetkili bayi",
o2:"Kaynak Sarf",
o2s:"Elektrod, tel, torç",
o3:"Elektrikli Aletler",
o3s:"Matkap, taşlama",
o4:"El Aletleri",
o4s:"Pense, anahtar, tornavida",
o5:"Hırdavat",
o5s:"Bağlantı ve sarf",
o6:"Firma Alımları",
o6s:"Atölye ve fabrikalara",
w1:"Organize sanayide.",
w2:"Ustanın yanında.",
w3:"Her işe.",
w4a:"Aradığınız ürün",
w4b:"burada.",
intro:"Kaynak makinesi ve sarfından elektrikli aletlere, el aletlerinden hırdavata kadar atölyenin ihtiyacı tek adreste.",
ch_label:"Neden Ada Ceylan Makina",
ch1k:"Bayi",
ch1h:"Magmaweld yetkili bayi",
ch1:"Kaynak makinesi ve sarfı yetkili satış noktasından.",
ch2k:"Raf",
ch2h:"Geniş ürün yelpazesi",
ch2:"Kaynaktan el aletine, elektrikli aletten hırdavata.",
ch3k:"Usta",
ch3h:"İşinize göre ürün",
ch3:"Ne yapacağınızı söyleyin, doğru ürünü birlikte seçelim.",
s1h:"Kaynak Makineleri ve Sarf",
s1:"Magmaweld yetkili satış bayisi olarak kaynak makineleri, elektrod, kaynak teli ve torç.",
s2h:"Elektrikli El Aletleri",
s2:"Matkap, taşlama, kırıcı-delici ve akülü aletler; atölye ve şantiye için.",
s3h:"El Aletleri ve Hırdavat",
s3:"Pense, anahtar takımları, tornavida ve günlük hırdavat ihtiyacı.",
s4h:"Adrese Servis",
s4:"Siparişinizi yazın; hazırlayıp adresinize ulaştıralım.",
a1:"Magmaweld yetkili bayi vitrini",
a2:"Elektrikli el aletleri reyonu",
a3:"El aletleri duvarı",
a4:"Ada Ceylan Makina mağazası",
proc_h:"Nasıl sipariş verilir?",
rv_cap:"Sakarya 1. Organize Sanayi Bölgesi, Fevzi Çakmak Caddesi No:52.",
rv_alt:"Ada Ceylan Makina mağazası, Erenler OSB",
st1_alt:"Magmaweld ürün rafı",
st2_alt:"Kaynak sarf malzemeleri",
st3_alt:"Elektrikli alet reyonu",
st4_alt:"Mağaza cephesi",
arc_h:"Raflarımızdan.",
ac1k:"Magmaweld Ürünleri",
ac1t:"Kaynak makineleri ve sarf malzemeleri, yetkili bayiden.",
ac1a:"Magmaweld kaynak ürünleri rafı",
ac2k:"Elektrikli El Aletleri",
ac2t:"Matkap, taşlama, kırıcı-delici ve akülü setler.",
ac2a:"Elektrikli el aletleri reyonu",
ac3k:"El Aletleri",
ac3t:"Pense, anahtar, tornavida; atölyenin günlük takımı.",
ac3a:"İzeltaş el aletleri duvarı",
ac4k:"Kaynak Sarf Malzemeleri",
ac4t:"Kontak meme, nozul ve torç parçaları, paket paket.",
ac4a:"Kaynak sarf malzemeleri",
ac5k:"Torç ve Aksesuar",
ac5t:"Gazaltı torçları ve bağlantı parçaları.",
ac5a:"Kaynak torçları",
ac6k:"Mağazamız",
ac6t:"Organize sanayinin içinde, geniş otoparkıyla.",
ac6a:"Ada Ceylan Makina mağaza cephesi",
whl_h:"Tek adres. Her iş.",
whl_c:"Hepsi Ada Ceylan'da.",
whl_sr:"Kaynak makinesi, elektrod, kaynak teli, torç, matkap, taşlama, pense, anahtar, hırdavat ve adrese servis.",
p1h:"Yazın",
p1:"Ürünün adını, ölçüsünü ve adedini yazın ya da fotoğrafını gönderin.",
p2h:"Fiyat ve stok",
p2:"Fiyatı ve stok durumunu size hemen bildirelim.",
p3h:"Hazırlık",
p3:"Siparişiniz hazırlansın; rafta yoksa getirtelim.",
p4h:"Teslim",
p4:"Mağazadan alın ya da adresinize gelsin.",
terms1:"Fiyat sormak ücretsizdir.",
terms2:"Ürünün fotoğrafını göndermeniz yeterli.",
loc_h:"Erenler OSB'de.",
addr:"Yeşiltepe Mah., Fevzi Çakmak Cd. No:52, Sakarya 1. Organize Sanayi Bölgesi, 54200 Erenler / Sakarya",
dir:"Google Haritalar'da aç",
lt1b:"Hafta içi",
lt2b:"Cumartesi",
lt3b:"Pazar",
lt3:"Kapalı",
lt4b:"Adrese servis",
lt4:"Var",
map:"Haritayı göster",
d1:"🚗 Arabayla yol tarifi",
d2:"🚌 Toplu taşımayla",
faq_h:"Merak edilenler",
q1:"Mağazanız nerede?",
q1a:"Sakarya 1. Organize Sanayi Bölgesi'nde, Fevzi Çakmak Caddesi No:52'deyiz (Yeşiltepe, Erenler). Yol tarifi butonuyla Google Haritalar'da açabilirsiniz.",
q2:"Çalışma saatleriniz nedir?",
q2a:"Hafta içi 08:00–18:00, cumartesi 08:00–16:00 açığız. Pazar kapalıyız.",
q3:"Magmaweld makineler için servis veriyor musunuz?",
q3a:"Magmaweld yetkili satış bayisiyiz; teknik servis hizmeti vermiyoruz. Servis için sizi doğru adrese yönlendirebiliriz.",
q4:"Adrese teslimat var mı?",
q4a:"Evet, adrese servisimiz var. Siparişinizi ve adresinizi yazın, teslimatı birlikte planlayalım.",
q5:"Fiyat ve stok nasıl öğrenirim?",
q5a:"Telefonla arayın ya da ürünün adını, ölçüsünü veya fotoğrafını WhatsApp'tan gönderin; fiyat ve stok bilgisini iletelim.",
close_h:"Bekleriz",
close_p:"Aradığınız ürünü yazın; fiyat ve stok bilgisini hemen iletelim.",
close_wa:"WhatsApp'tan yazın",
city:"Erenler / Sakarya",
credit:"Makina · Hırdavat · Kaynak",
pv:"Gizlilik ve çerezler",
pv_t:"Verileriniz bu sayfada nasıl kullanılıyor?",
pv1:"Bu sayfa kendi çerezini kullanmaz; ziyaretçi takibi, analitik ya da reklam aracı içermez. Harita yalnızca \"Haritayı göster\" butonuna bastığınızda Google tarafından yüklenir; bu durumda Google kendi çerezlerini kullanabilir.",
pv2:"Arka plan müziği yalnızca siz sayfaya dokunduğunuzda başlar; sol alttaki ses düğmesiyle kapatabilirsiniz, tercihiniz bu tarayıcıda hatırlanır.",
pv3:"Fiyat sorma penceresine yazdığınız bilgiler yalnızca WhatsApp mesajını hazırlamak için tarayıcınızda kullanılır; bir sunucuya kaydedilmez.",
pv4:"Mesajı gönderdiğinizde bilgileriniz WhatsApp üzerinden mağazaya iletilir ve WhatsApp'ın kendi gizlilik koşulları geçerli olur.",
m_k:"Fiyat sor",
m_t:"Ürünü yazın, mesajınız hazır olsun.",
m_occ:"Ürün grubu",
m_note:"Ürün adı, ölçü, adet",
m_note_ph:"Örn. 2,5 mm rutil elektrod, 5 paket",
m_name:"Adınız / firmanız (isteğe bağlı)",
m_date:"Ne zaman lazım? (isteğe bağlı)",
m_time:"Saat",
m_people:"Adet",
m_sum:"Özet",
m_tot:"Talep",
m_send:"WhatsApp ile gönder",
m_call:"Hemen ara: 0264 276 90 90",
m_fine:"Mesajınız WhatsApp'tan doğrudan mağazaya gider; fiyat ve stok bilgisi size yazılır.",
bnd_k:"Resmî bayiliklerimiz",
bnd_h:"Türkiye'nin güvendiği markalar, Sakarya'da bizde.",
bnd_p:"Ürünleri doğrudan üreticinin bayi kanalından alıyoruz: orijinal ürün, faturalı satış, yetkili bayi güvencesi.",
b9t:"Bayi",
b9d:"Matkap uçları, kılavuz, pafta ve frezeler.",
raf_k:"Raflarımızda ayrıca",
lgb_k:"Bayisi olduğumuz markalar",
yrm_h:"Müşterilerimiz ne diyor?",
yrm_s:"Google Haritalar · 8 yorum",
b1t:"Yetkili Bayi",
b1d:"Kaynak makineleri, elektrod ve kaynak telleri.",
b2t:"Bayi",
b2d:"Matkap, kırıcı-delici, taşlama ve akülü aletler.",
b3t:"Bayi",
b3d:"Pense, anahtar, tornavida ve lokma takımları.",
b4t:"Raflarımızda",
b4d:"Profesyonel elektrikli el aletleri.",
b5t:"Raflarımızda",
b5d:"Gazaltı torçları, meme ve nozullar.",
b6t:"Bayi",
b6d:"Kesme, taşlama diskleri ve zımparalar.",
b7t:"Raflarımızda",
b7d:"Pil ve el fenerleri.",
b8t:"Raflarımızda",
b8d:"Yapıştırıcı ve sızdırmazlık ürünleri.",
rv1:"“Her zaman hizmet için yerimizde hazırız, ticaret olmasa bile çayımızı içmeye bekleriz.”",
rv2:"“Harika bir ekip; sabah bile güler yüzlüler, ilgi süper.”",
rv3:"“Kalitesi ve fiyatlardaki avantajı fark ediliyor; personeli güler yüzlü ve çalışkan.”",
kat_k:"Ürün gruplarımız",
kat_h:"Atölyeden şantiyeye, ihtiyacınız olan her şey.",
kat_p:"Binlerce çeşit ürün rafta; aradığınız yoksa kısa sürede getirtiyoruz. Bir ürün grubuna dokunun, fiyat sorun.",
kt_b:"Fiyat sor →",
k1:"Elektrikli El Aletleri",
k2:"El Aletleri",
k3:"Kaynak Ekipmanları",
k4:"Ölçü Aletleri",
k5:"İş Güvenliği",
k6:"Makina Aksesuarları",
k7:"Hırdavat ve Kimyasallar",
k8:"Yük Taşıma ve Kompresör",
hero_h:"Kaynaktan hırdavata, işinizin her parçası burada.",
hero_b:"Sakarya 1. OSB, Erenler · Toptan ve perakende",
pb_r:"Resmî bayi",
pb_go:"Bu markadan fiyat sor",
pf_h:"Kaynakta Magmaweld yetkili bayisi.",
pf_go:"Magmaweld fiyatı sor",
reel_label:"Fiyat sor",
reel:"Fiyat sor"
}};I18N.en={
pf_go:"Ask a Magmaweld price",
pf_h:"Authorised Magmaweld dealer for welding.",
pb_go:"Ask a price for this brand",
pb_r:"Official dealer",
hero_h:"From welding to hardware, every part of your job is here.",
hero_b:"Sakarya 1st OIZ, Erenler · Wholesale and retail",
og_k:"Authorised dealer · Erenler OSB",
og_h1:"Magmaweld",
og_h2:"Authorised Dealer.",
og_sub:"Welding machines, electrodes, welding wire and torches: let's pick the right product for your job, and if it is not on the shelf we order it.",
og_all:"Magmaweld",
og_big:"Dealer",
og_cta:"Ask a price for welding products",
og1:"Welding Machines",
og1s:"Stick, MIG/MAG, TIG",
og2:"Electrodes",
og2s:"Rutile, basic, stainless",
og3:"Welding Wire",
og3s:"Solid and flux-cored",
og4:"Torches and Consumables",
og4s:"Tips, nozzles, liners",
og5:"Protective Gear",
og5s:"Helmets, gloves, aprons",
og6:"Parts to Order",
og6s:"Ordered if not in stock",
og_alt:"Magmaweld authorised dealer window",
og_note:"We are a sales dealer; we do not provide Magmaweld technical service.",
og_live:"08:00–18:00",
og_on:"Open now",
og_soon:"Opens today at 08:00",
og_tom:"Opens tomorrow at 08:00",
og_mon:"Opens Monday at 08:00",
title:"Welding Machines and Hardware in Erenler OSB",
desc:"Magmaweld authorised dealer in Sakarya 1st Organised Industrial Zone: welding machines, electrodes and consumables, power tools, hand tools and hardware.",
skip:"Skip to content",
home:"Home",
top:"Back to top",
nav1:"Products",
nav2:"Brands",
nav3:"Ordering",
nav4:"Location",
cta:"Ask a price",
call:"Call",
hello:"Ada Ceylan",
days:["Sunday. We are closed today; open tomorrow at 08:00.", "Monday. Start the week fully equipped; open 08:00–18:00.", "Tuesday. What you need is on the shelf; open 08:00–18:00.", "Wednesday. Send your order and we'll prepare it; open 08:00–18:00.", "Thursday. Restock your welding consumables; open 08:00–18:00.", "Friday. Stop by before the weekend jobs; open 08:00–18:00.", "Saturday. Open today 08:00–16:00."],
st_sr:"What a tradesman needs in Erenler OSB: welding machines, electrodes, drills, hand tools, hardware.",
st1:"In Erenler OSB,",
st2:"for the trade:",
cyc:["welding machines.", "electrodes.", "drills.", "hand tools.", "hardware."],
mani_label:"Ada Ceylan Makina",
mani:"In the workshop, on site or in the factory: <em class='a'>from welding machines to electrodes, from drills to plier sets</em>, what your job needs is here. Inside the industrial zone, with a smile and the right product.",
more1:"Our products",
more2:"How to order",
more3:"Ask a price",
ref_h:"What are you looking for?",
ref_note:"Pick a product group, write the product name or size, and your WhatsApp message is ready.",
pl_h:"Brands on our shelves",
rz:"Ask a price",
o1:"Welding Machines",
o1s:"Magmaweld dealer",
o2:"Welding Consumables",
o2s:"Electrodes, wire, torches",
o3:"Power Tools",
o3s:"Drills, grinders",
o4:"Hand Tools",
o4s:"Pliers, spanners, screwdrivers",
o5:"Hardware",
o5s:"Fasteners and supplies",
o6:"Company Orders",
o6s:"For workshops and factories",
w1:"In the industrial zone.",
w2:"Next to the trade.",
w3:"For every job.",
w4a:"What you need",
w4b:"is here.",
intro:"From welding machines and consumables to power tools, hand tools and hardware: everything a workshop needs at one address.",
ch_label:"Why Ada Ceylan Makina",
ch1k:"Dealer",
ch1h:"Magmaweld authorised dealer",
ch1:"Welding machines and consumables from an authorised sales point.",
ch2k:"Shelf",
ch2h:"Wide product range",
ch2:"From welding to hand tools, from power tools to hardware.",
ch3k:"Trade",
ch3h:"Products for your job",
ch3:"Tell us what you are doing and we'll pick the right product together.",
s1h:"Welding Machines and Consumables",
s1:"As an authorised Magmaweld dealer: welding machines, electrodes, welding wire and torches.",
s2h:"Power Tools",
s2:"Drills, grinders, rotary hammers and cordless tools for the workshop and the site.",
s3h:"Hand Tools and Hardware",
s3:"Pliers, spanner sets, screwdrivers and everyday hardware.",
s4h:"Delivery",
s4:"Send us your order; we prepare it and deliver to your address.",
a1:"Magmaweld dealer window",
a2:"Power tools aisle",
a3:"Hand tools wall",
a4:"Ada Ceylan Makina store",
proc_h:"How to order",
rv_cap:"Sakarya 1st Organised Industrial Zone, Fevzi Çakmak Street No:52.",
rv_alt:"Ada Ceylan Makina store at night",
st1_alt:"Magmaweld product shelf",
st2_alt:"Welding consumables",
st3_alt:"Power tools aisle",
st4_alt:"Store front",
arc_h:"From our shelves.",
ac1k:"Magmaweld Products",
ac1t:"Welding machines and consumables from an authorised dealer.",
ac1a:"Magmaweld welding products shelf",
ac2k:"Power Tools",
ac2t:"Drills, grinders, rotary hammers and cordless sets.",
ac2a:"Power tools aisle",
ac3k:"Hand Tools",
ac3t:"Pliers, spanners, screwdrivers: the workshop's everyday kit.",
ac3a:"Hand tools wall",
ac4k:"Welding Consumables",
ac4t:"Contact tips, nozzles and torch parts by the pack.",
ac4a:"Welding consumables",
ac5k:"Torches and Accessories",
ac5t:"MIG torches and fittings.",
ac5a:"Welding torches",
ac6k:"Our Store",
ac6t:"Inside the industrial zone, with plenty of parking.",
ac6a:"Ada Ceylan Makina store front",
whl_h:"One address. Every job.",
whl_c:"All at Ada Ceylan.",
whl_sr:"Welding machines, electrodes, welding wire, torches, drills, grinders, pliers, spanners, hardware and delivery.",
p1h:"Write",
p1:"Send the product name, size and quantity, or a photo.",
p2h:"Price and stock",
p2:"We tell you the price and availability right away.",
p3h:"Preparation",
p3:"We prepare your order and source it if it is not in stock.",
p4h:"Delivery",
p4:"Pick it up at the store or have it delivered.",
terms1:"Asking for a price is free.",
terms2:"Just send a photo of the product.",
loc_h:"In Erenler OSB.",
addr:"Yeşiltepe, Fevzi Çakmak St. No:52, Sakarya 1st Organised Industrial Zone, 54200 Erenler / Sakarya",
dir:"Open in Google Maps",
lt1b:"Weekdays",
lt2b:"Saturday",
lt3b:"Sunday",
lt3:"Closed",
lt4b:"Delivery",
lt4:"Available",
map:"Show map",
d1:"🚗 Driving directions",
d2:"🚌 By public transport",
faq_h:"Questions",
q1:"Where is your store?",
q1a:"We are in Sakarya 1st Organised Industrial Zone, Fevzi Çakmak Street No:52 (Yeşiltepe, Erenler). Tap the directions button to open us in Google Maps.",
q2:"What are your opening hours?",
q2a:"Weekdays 08:00–18:00, Saturday 08:00–16:00. Closed on Sunday.",
q3:"Do you service Magmaweld machines?",
q3a:"We are an authorised Magmaweld sales dealer and do not provide technical service. We can point you to the right service address.",
q4:"Do you deliver?",
q4a:"Yes, we deliver. Send your order and address and we'll plan the delivery together.",
q5:"How do I get a price?",
q5a:"Call us or send the product name, size or a photo on WhatsApp and we'll send you price and availability.",
close_h:"Welcome",
close_p:"Tell us what you need and we'll send price and availability right away.",
close_wa:"Write on WhatsApp",
city:"Erenler / Sakarya",
credit:"Machinery · Hardware · Welding",
pv:"Privacy & cookies",
pv_t:"How your data is used on this page",
pv1:"This page sets no cookies of its own and uses no visitor tracking, analytics or advertising tools. The map only loads from Google when you tap \"Show map\"; Google may then use its own cookies.",
pv2:"Background music only starts after you tap the page. You can turn it off with the sound button at the bottom left, and this browser remembers your choice.",
pv3:"The details you enter in the price request window are only used in your browser to prepare the WhatsApp message and are not stored on any server.",
pv4:"When you send the message, your details go to the store via WhatsApp and WhatsApp's own privacy terms apply.",
m_k:"Ask a price",
m_t:"Write the product, and your message is ready.",
m_occ:"Product group",
m_note:"Product, size, quantity",
m_note_ph:"e.g. 2.5 mm rutile electrode, 5 packs",
m_name:"Your name / company (optional)",
m_date:"When do you need it? (optional)",
m_time:"Saat",
m_people:"Adet",
m_sum:"Summary",
m_tot:"Request",
m_send:"Send on WhatsApp",
m_call:"Call now: +90 264 276 90 90",
m_fine:"Your message goes straight to the store via WhatsApp; we reply with price and availability.",
bnd_k:"Our official dealerships",
bnd_h:"Brands Türkiye trusts, here in Sakarya.",
bnd_p:"We buy directly through each manufacturer's dealer channel: genuine products, invoiced sales, the assurance of an official dealer.",
b9t:"Dealer",
b9d:"Drill bits, taps, dies and milling cutters.",
raf_k:"Also on our shelves",
lgb_k:"Brands we are a dealer of",
yrm_h:"What our customers say",
yrm_s:"Google Maps · 8 reviews",
b1t:"Authorised dealer",
b1d:"Welding machines, electrodes and welding wire.",
b2t:"Dealer",
b2d:"Drills, rotary hammers, grinders and cordless tools.",
b3t:"Dealer",
b3d:"Pliers, spanners, screwdrivers and socket sets.",
b4t:"On our shelves",
b4d:"Professional power tools.",
b5t:"On our shelves",
b5d:"MIG torches, tips and nozzles.",
b6t:"Dealer",
b6d:"Cutting and grinding discs and abrasives.",
b7t:"On our shelves",
b7d:"Batteries and torches.",
b8t:"On our shelves",
b8d:"Adhesives and sealants.",
rv1:"“We are always here to serve you; even without business, come by for a tea.”",
rv2:"“A great team; friendly even early in the morning, excellent attention.”",
rv3:"“You can tell the quality and the price advantage; the staff are friendly and hard-working.”",
kat_k:"Product groups",
kat_h:"From the workshop to the site, everything you need.",
kat_p:"Thousands of products on the shelf; if it is not in stock we source it quickly. Tap a group to ask for a price.",
kt_b:"Ask a price →",
k1:"Power Tools",
k2:"Hand Tools",
k3:"Welding Equipment",
k4:"Measuring Tools",
k5:"Work Safety",
k6:"Machine Accessories",
k7:"Hardware and Chemicals",
k8:"Lifting and Compressors",
reel_label:"Ask a price",
reel:"Ask a price"
};
  var lang='tr', ready0=false;
  try{var q=new URLSearchParams(location.search).get('lang');if(q==='en'||q==='tr')lang=q;else{var s=localStorage.getItem('lang');if(s==='en')lang='en'}}catch(e){}
  function waLinks(l){var t=l==='en'?'Hello, I would like price and stock information from Ada Ceylan Makina.':'Merhaba, Ada Ceylan Makina\'dan fiyat ve stok bilgisi almak istiyorum.';document.querySelectorAll('.wa').forEach(function(a){a.href='https://wa.me/'+CONTACT.whatsapp+'?text='+encodeURIComponent(t)})}waLinks(lang);document.addEventListener('rv-lang',function(e){waLinks(e.detail)});
  
  var mani=$('#mani'), words=[], cyc=$('#cyc'), ci=0;
  function splitMani(){
    words=[];
    (function split(node,acc){
      Array.prototype.slice.call(node.childNodes).forEach(function(n){
        if(n.nodeType===3){
          var frag=document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function(t){
            if(!t)return;
            if(/^\s+$/.test(t)){frag.appendChild(document.createTextNode(t));return}
            var s=document.createElement('span');s.className='w'+(acc?' a':'');s.textContent=t;frag.appendChild(s);words.push(s);
          });
          n.parentNode.replaceChild(frag,n);
        }else if(n.nodeType===1){split(n,acc||n.classList.contains('a'))}
      });
    })(mani,false);
  }
  window.VA_I18N=I18N;
  function setLang(l){
    lang=l; var D=I18N[l];
    root.lang=l;
    document.querySelectorAll('[data-i18n]').forEach(function(el){var v=D[el.getAttribute('data-i18n')];if(v!=null&&el.textContent!==v)el.textContent=v});
    document.querySelectorAll('[data-i18n-ph]').forEach(function(el){var v=D[el.getAttribute('data-i18n-ph')];if(v)el.placeholder=v});document.querySelectorAll('[data-i18n-alt]').forEach(function(el){el.alt=D[el.getAttribute('data-i18n-alt')]});
    document.querySelectorAll('[data-i18n-label]').forEach(function(el){el.setAttribute('aria-label',D[el.getAttribute('data-i18n-label')])});
    document.querySelectorAll('.brand').forEach(function(a){a.setAttribute('aria-label',brand+' · '+(a.closest('footer')?D.top:D.home))});
    document.title=brand+' · '+D.title;
    var md=document.querySelector('meta[name=description]'); if(md)md.content=D.desc;
    $('#day').textContent=D.days[new Date().getDay()];
    ci=0; if(cyc.textContent!==D.cyc[0])cyc.textContent=D.cyc[0];
    mani.innerHTML=D.mani; splitMani();
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-lang')===l)});
    
    if(window.rvTx)window.rvTx(l);
    try{document.dispatchEvent(new CustomEvent('rv-lang',{detail:l}))}catch(e){}
    if(ready0)update();
  }
  document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){var l=b.getAttribute('data-lang');try{localStorage.setItem('lang',l)}catch(e){}setLang(l)})});
  var brand='Ada Ceylan Makina';
  setLang(lang);
  requestAnimationFrame(function(){requestAnimationFrame(function(){$('.hero').classList.add('in')})});

  /* cycling word */
  if(!reduce) setInterval(function(){
    if(document.hidden)return;
    var list=I18N[lang].cyc;
    cyc.classList.add('out');
    setTimeout(function(){ci=(ci+1)%list.length;cyc.textContent=I18N[lang].cyc[ci%I18N[lang].cyc.length];cyc.classList.remove('out')},450);
  },2600);

  /* scroll-linked: nav theme, blur lines, manifesto fill, reel card */
  var nav=$('#nav'), darks=document.querySelectorAll('[data-dark]'), lines=document.querySelectorAll('.big .ln, .h2, .arc-h, .wh-h, .svc h3'), reel=$('#reel'), more=$('.more'), refs=$('#referenzen'), hero=$('.hero');
  var ticking=false;
  function update(){
    ticking=false;
    var vh=innerHeight, dark=false;
    darks.forEach(function(s){var r=s.getBoundingClientRect(); if(r.top<=32&&r.bottom>32)dark=true});
    nav.classList.toggle('is-dark',dark);
    if(!reduce){
      lines.forEach(function(l){
        var r=l.getBoundingClientRect();
        var v=Math.min(clamp((vh-r.top)/(vh*.42)),clamp((r.bottom-64)/(vh*.1)));
        l.style.filter=v>.995?'none':'blur('+((1-v)*14).toFixed(1)+'px)';
        l.style.opacity=v<.02?'0':(.1+.9*v).toFixed(3);
      });
      var mr=mani.getBoundingClientRect();
      var p=clamp((vh*.82-mr.top)/(mr.height+vh*.3));
      var k=Math.round(p*words.length);
      for(var i=0;i<words.length;i++)words[i].classList.toggle('on',i<k);
    }
    /* reel card lives beside the manifesto links and over the logo grid (as on hugeinc.com), never on top of the links */
    var mo=more.getBoundingClientRect(), rf=refs.getBoundingClientRect(), zone=vh-reel.offsetHeight-40;
    reel.classList.toggle('show',mo.top<vh*.9&&rf.bottom>vh*.55&&!(mo.bottom>zone&&mo.top<vh));
  }
  /* marquee, wheel and horizontal steps */
  var mq1=$('#mq1'), mq2=$('#mq2'), marq=$('.marq');
  var wheel=$('#wheel'), ring=$('#whRing'), wItems=ring.querySelectorAll('li'), whActive=$('#whActive'), dial=$('#whDial'), RX=300, RY=200, lastOn=-1;
  var hs=$('#hs'), track=$('#hsTrack'), hsBar=$('#hsBar'), hsMax=0;
  function layout(){
    arcLayout();
    RX=Math.min(innerWidth*(innerWidth<700?.33:.36),560); RY=Math.min(innerHeight*.29,340);
    var n=wItems.length;
    wItems.forEach(function(li,i){li.dataset.a=i/n*360});
    dial.style.width=(RX*2)+'px'; dial.style.height=(RY*2)+'px';
    dial.firstElementChild.style.top=(-11)+'px';
    hs.style.height='';
  }
  document.querySelectorAll('.logos li').forEach(function(l,i){l.style.setProperty('--d',i)});
  var lgs=$('.logos'); if('IntersectionObserver' in window){new IntersectionObserver(function(e,o){if(e[0].isIntersecting){lgs.classList.add('in');o.disconnect()}},{threshold:.15}).observe(lgs)}else lgs.classList.add('in');
  var svcLi=document.querySelectorAll('.svc li'); svcLi.forEach(function(l,i){l.style.setProperty('--i',i)});
  var arc=$('#arc'), aCards=arc.querySelectorAll('.acard'), aH=arc.querySelector('.arc-h'), AW=400, AH=480, AT=200, AR=900, ASTEP=24;
  function arcLayout(){
    return;
    var vw=innerWidth, vh=innerHeight;
    AW=Math.min(vw*.74,500); AH=Math.min(AW*1.22,vh*.56);
    var hb=aH.getBoundingClientRect().height+aH.offsetTop+24;
    AT=Math.max(hb,(vh-AH)*.62);
    if(AT+AH>vh-16)AH=vh-16-AT;
    AR=AW*2.4; ASTEP=(AW*1.06)/AR*180/Math.PI;
    aCards.forEach(function(c){c.style.width=AW+'px';c.style.height=AH+'px';c.style.marginLeft=(-AW/2)+'px';c.style.top=AT+'px';c.style.transformOrigin='50% '+AR+'px'});
  }
  /* 120fps: on browsers with scroll-driven animations the arc runs on the compositor (native scroll rate), JS only keeps z-order */
  var arcSDA=false;
  if(false){try{
    var aTl=new ViewTimeline({subject:arc,axis:'block'}), aN=aCards.length-1, aS=1.06/2.4*180/Math.PI, aOpt={timeline:aTl,rangeStart:'contain 0%',rangeEnd:'contain 100%',fill:'both',easing:'linear'};
    var aPts=function(l){return l.filter(function(o){return o>=0&&o<=aN}).sort(function(x,y){return x-y}).filter(function(o,k,s){return !k||o-s[k-1]>1e-6})};
    var aAnims=[];
    aCards.forEach(function(c,i){
      aAnims.push(c.animate(aPts([0,aN,i,i-1,i+1,i-2.2-1e-3,i-2.2+1e-3,i+2.2-1e-3,i+2.2+1e-3]).map(function(o){var a=Math.abs(i-o);
        return {offset:aN?o/aN:0,transform:'rotate('+((i-o)*aS).toFixed(3)+'deg) scale('+(1-Math.min(a,1)*.06).toFixed(4)+')',opacity:a>2.2?0:1}}),aOpt));
      var tx=c.querySelector('.ac-t'); if(tx)aAnims.push(tx.animate(aPts([0,aN,i,i-.625,i+.625]).map(function(o){
        return {offset:aN?o/aN:0,opacity:Math.max(0,1-Math.abs(i-o)*1.6)}}),aOpt));
    });
    arcSDA=true;
  }catch(e){arcSDA=false;if(aAnims)aAnims.forEach(function(x){try{x.cancel()}catch(_){}})}}
  function arcMotion(){
    return;
    if(arcSDA){var r0=arc.getBoundingClientRect();if(r0.bottom<0||r0.top>innerHeight)return;var o0=clamp(-r0.top/((arc.offsetHeight-innerHeight)||1))*(aCards.length-1);
      aCards.forEach(function(c,i){c.style.zIndex=10-Math.round(Math.abs(i-o0))});return}
    var r=arc.getBoundingClientRect(), p=clamp(-r.top/((arc.offsetHeight-innerHeight)||1)), off=p*(aCards.length-1);
    aCards.forEach(function(c,i){var t=(i-off)*ASTEP, a=Math.abs(t)/ASTEP;
      c.style.transform='rotate('+t.toFixed(2)+'deg) scale('+(1-Math.min(a,1)*.06).toFixed(3)+')';
      c.style.opacity=a>2.2?0:1; c.style.setProperty('--tx',Math.max(0,1-a*1.6).toFixed(2)); c.style.zIndex=10-Math.round(a)});
  }
  var rv=$('#reveal'), rvf=rv.querySelector('.rv-frame'), rvi=rvf.querySelector('img'), rvc=rv.querySelector('.rv-cap');
  function motion(){
    var vh=innerHeight;
    arcMotion();
    if(!reduce){for(var si=0;si<svcLi.length-1;si++){var a=svcLi[si].getBoundingClientRect(), b=svcLi[si+1].getBoundingClientRect(), ov=clamp((a.bottom-b.top)/(a.height||1));
      svcLi[si].style.transform='scale('+(1-ov*.05).toFixed(3)+')'; svcLi[si].style.filter=ov>.01?'brightness('+(1-ov*.45).toFixed(3)+')':'none'}}
    if(!reduce){var rr=rv.getBoundingClientRect(), q=clamp((vh-rr.top)/(rv.offsetHeight)), e=clamp((q-.15)/.55);
      rvf.style.setProperty('--ci',(18*(1-e)).toFixed(2)+'%');rvf.style.setProperty('--cx',(22*(1-e)).toFixed(2)+'%');rvf.style.setProperty('--cr',(28*(1-e)).toFixed(1)+'px');
      rvi.style.setProperty('--sc',(1.25-.25*e).toFixed(3));rvc.style.setProperty('--co',clamp((e-.6)/.35).toFixed(3))}
    var mr=marq.getBoundingClientRect();
    if(!SDA&&mr.bottom>0&&mr.top<vh){var k=(vh-mr.top)*.45;mq1.style.transform='translate3d('+(-k)+'px,0,0)';mq2.style.transform='translate3d('+(k-600)+'px,0,0)'}
    var wr=wheel.getBoundingClientRect(), span=wheel.offsetHeight-vh;
    var wp=reduce?0:clamp(-wr.top/(span||1));
    var rot=-wp*330;
    if(!SDA)wItems.forEach(function(li){var a=(+li.dataset.a+rot)*Math.PI/180, z=(Math.cos(a)+1)/2;
      li.style.transform='translate3d('+(Math.sin(a)*RX).toFixed(1)+'px,'+(-Math.cos(a)*RY).toFixed(1)+'px,0) scale('+(.72+.28*z).toFixed(3)+')';
      li.style.opacity=(.35+.65*z).toFixed(3)});
    var n=wItems.length, best=0, bd=999;
    wItems.forEach(function(li,i){var d=Math.abs((((+li.dataset.a+rot)%360)+540)%360-180);if(d<bd){bd=d;best=i}});
    if(best!==lastOn){if(lastOn>=0)wItems[lastOn].classList.remove('on');wItems[best].classList.add('on');whActive.textContent=wItems[best].textContent;lastOn=best}
  }
  /* 120fps: marquee, wheel and horizontal steps as scroll-driven animations (compositor), rebuilt on layout */
  var SDA=false, sdaA=[];
  function sdaBuild(){
    sdaA.forEach(function(x){try{x.cancel()}catch(_){}}); sdaA=[];
    var vh=innerHeight, L={easing:'linear',fill:'both'};
    function tl(el,r0,r1){return {timeline:new ViewTimeline({subject:el,axis:'block'}),rangeStart:r0,rangeEnd:r1,fill:'both',easing:'linear'}}
    var mh=marq.offsetHeight, K=(vh+mh)*.45, om=tl(marq,'cover 0%','cover 100%');
    sdaA.push(mq1.animate([{transform:'translate3d(0px,0,0)'},{transform:'translate3d('+(-K)+'px,0,0)'}],om));
    sdaA.push(mq2.animate([{transform:'translate3d(-600px,0,0)'},{transform:'translate3d('+(K-600)+'px,0,0)'}],om));
    var ow=tl(wheel,'contain 0%','contain 100%'), N=66;
    wItems.forEach(function(li){var kf=[];for(var s=0;s<=N;s++){var a=(+li.dataset.a-330*s/N)*Math.PI/180, z=(Math.cos(a)+1)/2;
      kf.push({offset:s/N,transform:'translate3d('+(Math.sin(a)*RX).toFixed(2)+'px,'+(-Math.cos(a)*RY).toFixed(2)+'px,0) scale('+(.72+.28*z).toFixed(4)+')',opacity:(.35+.65*z).toFixed(4)})}
      sdaA.push(li.animate(kf,ow))});
    var oh=tl(hs,'contain 0%','contain 100%');
  }
  if(!reduce&&typeof ViewTimeline==='function'&&Element.prototype.animate){
    try{var _lay=layout;layout=function(){_lay();if(SDA)try{sdaBuild()}catch(e){SDA=false;sdaA.forEach(function(x){try{x.cancel()}catch(_){}});sdaA=[]}};SDA=true}catch(e){SDA=false}
  }
  track.addEventListener('scroll',function(){var m=track.scrollWidth-track.clientWidth;hsBar.style.transform='scaleX('+(m>0?clamp(track.scrollLeft/m):0).toFixed(3)+')'},{passive:true});
  layout(); motion();
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){layout();motion()});
  addEventListener('load',function(){layout();motion()});
  addEventListener('resize',function(){layout();motion()});
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(function(){update();motion()})}}
  addEventListener('scroll',onScroll,{passive:true});
  addEventListener('resize',onScroll);
  update(); ready0=true;

  /* reel card: drifting grid of puffy Z's */
  var rc=reel.querySelector('canvas'), rx=rc.getContext('2d'), poster={complete:false}, reelOn=false, rt0=performance.now();
  function drawReel(now){
    var W=rc.width,H=rc.height,t=(now-rt0)/1000,s=96,off=(reduce?0:t*14)%s;
    rx.fillStyle='#16181b';rx.fillRect(0,0,W,H);
    for(var y=-1;y<6;y++)for(var x=-1;x<8;x++){
      var px=x*s+(y%2?s/2:0)-off, py=y*s-off*.5;
      rx.save();rx.translate(px+s/2,py+s/2);rx.rotate((((x*7+y*3)%5+5)%5-2)*.07);
      if(poster.complete&&poster.naturalWidth)rx.drawImage(poster,-s*.5,-s*.5,s,s);
      else{rx.fillStyle='#A9791F';rx.beginPath();rx.moveTo(0,-s*.22);rx.lineTo(s*.14,0);rx.lineTo(0,s*.22);rx.lineTo(-s*.14,0);rx.closePath();rx.fill()}
      rx.restore();
    }
    if(reelOn&&!reduce)requestAnimationFrame(drawReel);
  }
  new MutationObserver(function(){
    var on=reel.classList.contains('show');
    if(on&&!reelOn){reelOn=true;requestAnimationFrame(drawReel)} else if(!on)reelOn=false;
  }).observe(reel,{attributes:true,attributeFilter:['class']});

  /* hero 3D: lazy-load three.js after page load */
  function webgl(){try{var c=document.createElement('canvas');return !!(window.WebGLRenderingContext&&(c.getContext('webgl')||c.getContext('experimental-webgl')))}catch(e){return false}}
  function loadThree(){}
  function later(){(window.requestIdleCallback||function(f){setTimeout(f,200)})(loadThree,{timeout:1200})}
  if(document.readyState==='complete')later(); else addEventListener('load',later);

  function initHero(){
    var T=window.THREE; if(!T)return;
    var stage=$('.stage'), canvas=document.createElement('canvas'), renderer;
    stage.appendChild(canvas);
    try{renderer=new T.WebGLRenderer({canvas:canvas,antialias:true,alpha:true,powerPreference:'high-performance'})}catch(e){canvas.remove();return}
    var small=innerWidth<700;
    renderer.setPixelRatio(Math.min(devicePixelRatio||1,small?1.5:1.75));
    renderer.outputEncoding=T.sRGBEncoding;
    renderer.toneMapping=T.ACESFilmicToneMapping;
    renderer.toneMappingExposure=1.0;
    renderer.setClearColor(0x000000,0);

    var scene=new T.Scene(), cam=new T.PerspectiveCamera(30,1,.1,60);
    cam.position.set(0,0,8.3);

    /* studio environment for reflections */
    var pm=new T.PMREMGenerator(renderer), env=new T.Scene();
    env.add(new T.Mesh(new T.SphereGeometry(20,32,16),new T.MeshBasicMaterial({color:0x050505,side:T.BackSide})));
    function box(w,h,x,y,z,r,g,b){var m=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({side:T.DoubleSide}));m.material.color.setRGB(r,g,b);m.position.set(x,y,z);m.lookAt(0,0,0);env.add(m)}
    box(12,5,-5,9,6,6,6,6);
    box(2.2,16,11,1,3,3.2,3.4,4);
    box(1.6,14,-11,-1,1,2.2,2.2,2.2);
    box(18,2.5,0,-10,5,.7,.7,.8);
    box(5,4,2,3,12,1.1,1.1,1.2);
    box(3,10,0,0,-12,1.6,1.6,2);
    scene.environment=pm.fromScene(env,.035).texture;

    var key=new T.DirectionalLight(0xffffff,1.25);key.position.set(-6,4,3.5);scene.add(key);
    var rim=new T.DirectionalLight(0x6f86ff,.9);rim.position.set(5,-2,-4);scene.add(rim);
    scene.add(new T.HemisphereLight(0xc8d0ff,0x000008,.18));

    /* speckled cobalt fabric */
    function ctex(size,draw){var c=document.createElement('canvas');c.width=c.height=size;draw(c.getContext('2d'),size);var t=new T.CanvasTexture(c);t.wrapS=t.wrapT=T.RepeatWrapping;return t}
    var rnd=(function(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}})(7);
    var map=ctex(512,function(g,S){g.fillStyle='#1533F5';g.fillRect(0,0,S,S);
      for(var i=0;i<3200;i++){g.fillStyle='rgba(4,8,60,'+(.35+rnd()*.5)+')';g.beginPath();g.arc(rnd()*S,rnd()*S,.5+rnd()*1.3,0,7);g.fill()}
      for(i=0;i<700;i++){g.fillStyle='rgba(160,175,255,'+(.25+rnd()*.35)+')';g.beginPath();g.arc(rnd()*S,rnd()*S,.4+rnd()*.9,0,7);g.fill()}});
    map.encoding=T.sRGBEncoding;
    var bump=ctex(256,function(g,S){var d=g.createImageData(S,S);for(var i=0;i<d.data.length;i+=4){var v=110+rnd()*145|0;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=255}g.putImageData(d,0,0)});
    bump.repeat.set(3,3);

    var fabric=new T.MeshPhysicalMaterial({map:map,bumpMap:bump,bumpScale:.006,roughness:.62,metalness:0,clearcoat:.22,clearcoatRoughness:.5,envMapIntensity:.42});
    fabric.sheen=new T.Color(0x1a2a9a);
    var chrome=new T.MeshStandardMaterial({color:0xe9e9f0,metalness:1,roughness:.14,envMapIntensity:1.5,bumpMap:bump,bumpScale:.01});

    var N=small?84:120;
    function sm(a,b,x){x=clamp((x-a)/(b-a));return x*x*(3-2*x)}
    /* inflated pillow: superellipse outline, puffy profile, fabric gathered toward the seam */
    function shapeAt(s,t,w,h,seed){
      var q=Math.max(Math.abs(s),Math.abs(t)),u=0,v=0;
      if(q>0){var r=Math.pow(Math.pow(Math.abs(s),4)+Math.pow(Math.abs(t),4),.25);u=s*q/r;v=t*q/r}
      var X=u*w/2,Y=v*h/2;
      var au=Math.pow(Math.abs(u),6),av=Math.pow(Math.abs(v),6),bw=av/(au+av+1e-6);
      var rid=(bw*Math.sin(X*23+2.4*Math.sin(Y*4.3+seed)+1.3*Math.sin(X*7.7-seed)+seed)+(1-bw)*Math.sin(Y*23+2.4*Math.sin(X*4.1+seed*2)+1.3*Math.sin(Y*8.3+seed)+seed))*(.55+.45*Math.sin(X*2.9+Y*3.7+seed*3));
      var edge=sm(.5,.97,q);
      var sc=.013*rid*edge*sm(.9,1,q);
      var len=Math.sqrt(X*X+Y*Y)||1;
      X+=X/len*sc;Y+=Y/len*sc;
      return {X:X,Y:Y,q:q,rid:rid,edge:edge};
    }
    function pillow(w,h,d,seed){
      var pos=[],uv=[],idx=[],R=N+1;
      for(var f=0;f<2;f++){
        var base=pos.length/3,sg=f?-1:1;
        for(var j=0;j<=N;j++)for(var i=0;i<=N;i++){
          var P=shapeAt(i/N*2-1,j/N*2-1,w,h,seed);
          var Z=Math.sqrt(Math.max(0,1-Math.pow(P.q,3)))*d/2;
          Z+=(.062*P.rid*P.edge+.022*Math.sin(P.X*6.3+Math.sin(P.Y*3.1)+seed)*Math.sin(P.Y*5.1-seed)+.01*Math.sin(P.X*13.7-P.Y*9.1+seed))*(1-Math.pow(P.q,10));
          pos.push(P.X,P.Y,sg*Z);uv.push(P.X/1.7+seed,P.Y/1.7);
        }
        for(j=0;j<N;j++)for(i=0;i<N;i++){
          var a=base+j*R+i,b=a+1,c=a+R+1,e=a+R;
          if(f)idx.push(a,c,b,a,e,c);else idx.push(a,b,c,a,c,e);
        }
      }
      var g=new T.BufferGeometry();
      g.setAttribute('position',new T.Float32BufferAttribute(pos,3));
      g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));
      g.setIndex(idx);g.computeVertexNormals();
      var pts=[],M=small?160:240;
      for(var k=0;k<M;k++){
        var p=k/M*8,s,t;
        if(p<2){s=1;t=-1+p}else if(p<4){s=1-(p-2);t=1}else if(p<6){s=-1;t=1-(p-4)}else{s=-1+(p-6);t=-1}
        var Q=shapeAt(s,t,w,h,seed);
        pts.push(new T.Vector3(Q.X,Q.Y,.018*Math.sin(k*1.7+seed)));
      }
      var grp=new T.Group();
      grp.add(new T.Mesh(g,fabric));
      grp.add(new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts,true),M*2,.052,10,true),chrome));
      return grp;
    }
    var E=new T.Group(); /* letter Z: top bar + bottom bar + diagonal */
    [[2.55,.98,1.21,1.1],[2.55,.98,-1.21,3.4]].forEach(function(a){
      var p=pillow(a[0],a[1],.82,a[3]);p.position.set(0,a[2],.04);E.add(p);
    });
    var diag=pillow(1.02,3.05,.95,.3);diag.rotation.z=-.70;diag.position.set(0,0,0);E.add(diag);
    var holder=new T.Group();holder.add(E);scene.add(holder);

    var ready=false;
    function size(){var r=stage.getBoundingClientRect(),S=Math.max(1,Math.round(r.width));renderer.setSize(S,S,false);if(ready&&!running)renderer.render(scene,cam)}
    addEventListener('resize',size);

    var tx=0,ty=0,mx=0,my=0,running=false,raf=0,start=performance.now();
    function pose(t){
      mx+=(tx-mx)*.045;my+=(ty-my)*.045;
      holder.rotation.y=-.17+Math.sin(t*.33)*.14+mx*.22;
      holder.rotation.x=.07+Math.sin(t*.26)*.05+my*.14;
      holder.rotation.z=Math.sin(t*.21)*.02;
      holder.position.y=Math.sin(t*.55)*.05;
    }
    function frame(now){pose((now-start)/1000);renderer.render(scene,cam);if(running)raf=requestAnimationFrame(frame)}
    size();ready=true;pose(0);renderer.render(scene,cam);stage.classList.add('live');
    if(reduce)return;
    addEventListener('pointermove',function(e){tx=(e.clientX/innerWidth-.5)*2;ty=(e.clientY/innerHeight-.5)*2},{passive:true});
    function setRun(on){if(on&&!running){running=true;raf=requestAnimationFrame(frame)}else if(!on){running=false;cancelAnimationFrame(raf)}}
    var vis=true;
    new IntersectionObserver(function(es){vis=es[0].isIntersecting;setRun(vis&&!document.hidden)}).observe(hero);
    document.addEventListener('visibilitychange',function(){setRun(vis&&!document.hidden)});
  }
})();

(function(){
var $=function(s){return document.querySelector(s)},$$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var PHONE='905492915858';
var OCC={tr:{kaynak:'Kaynak Makineleri',sarf:'Kaynak Sarf',elektrikli:'Elektrikli Aletler',el:'El Aletleri',hirdavat:'Hırdavat',firma:'Firma Alımı'},
         en:{kaynak:'Welding machines',sarf:'Welding consumables',elektrikli:'Power tools',el:'Hand tools',hirdavat:'Hardware',firma:'Company order'}};
var bk=$('#bk'),din=$('#bk-date'),tsel=$('#bk-time'),gE=$('#bk-g'),lines=$('#bk-lines'),tot=$('#bk-total'),wa=$('#bk-wa'),stick=$('#stick'),opener=null;
var G=2;
function EN(){return document.documentElement.lang==='en'}
function iso(d){var m=d.getMonth()+1,x=d.getDate();return d.getFullYear()+'-'+(m<10?'0':'')+m+'-'+(x<10?'0':'')+x}
function long(v){if(!v)return '';var p=v.split('-');var d=new Date(+p[0],+p[1]-1,+p[2]);return d.toLocaleDateString(EN()?'en-GB':'tr-TR',{weekday:'long',day:'numeric',month:'long'})}
var now=new Date();din.min=iso(now);
for(var h=11;h<=22;h++){['00','30'].forEach(function(m){var o=document.createElement('option');o.value=o.textContent=(h<10?'0':'')+h+':'+m;tsel.appendChild(o)})}

function occ(){var r=$('input[name=bk-occ]:checked');return r?r.value:'kaynak'}
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function calc(){
  var en=EN(),L=en?'en':'tr',o=OCC[L][occ()],name=$('#bk-n').value.trim(),note=$('#bk-note').value.trim();
  var rows=[[en?'Product group':'Ürün grubu',o]];
  if(note)rows.push([en?'Product':'Ürün',note]);
  if(din.value)rows.push([en?'Needed by':'Ne zaman',long(din.value)]);
  if(name)rows.push([en?'Name':'Ad / firma',name]);
  lines.innerHTML=rows.map(function(r){return '<div><span>'+esc(String(r[0]))+'</span><em>'+esc(String(r[1]))+'</em></div>'}).join('');
  tot.textContent=o;
  var msg=(en?'Hello, I would like a price from Ada Ceylan Makina.\n':'Merhaba, Ada Ceylan Makina\'dan fiyat almak istiyorum.\n')+rows.map(function(r){return r[0]+': '+r[1]}).join('\n')+(en?'\nCould you send price and availability? Thank you.':'\nFiyat ve stok bilgisi iletebilir misiniz? Teşekkürler.');
  wa.href='https://wa.me/'+PHONE+'?text='+encodeURIComponent(msg);wa.classList.remove('off');
}
function open(o,el){
  opener=el||null;
  if(o){var x=$$('input[name=bk-occ]').filter(function(i){return i.value===o})[0];if(x)x.checked=true}
  bk.hidden=false;document.documentElement.classList.add('bk-open');stick.classList.remove('on');
  calc();requestAnimationFrame(function(){bk.classList.add('on');var f=$('#bk-note');if(f)f.focus({preventScroll:true})});
}
function close(){
  bk.classList.remove('on');document.documentElement.classList.remove('bk-open');
  setTimeout(function(){bk.hidden=true},300);if(opener&&opener.focus)opener.focus({preventScroll:true});sticky();
}
function sticky(){stick.classList.toggle('on',bk.hidden&&scrollY>innerHeight*.7)}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-book]');if(a){e.preventDefault();open(a.getAttribute('data-occ'),a)}});
$('#bk-x').addEventListener('click',close);
bk.addEventListener('click',function(e){if(e.target===bk)close()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!bk.hidden)close()});
$$('.bk-st button').forEach(function(b){b.addEventListener('click',function(){G=Math.max(1,Math.min(40,G+(+b.getAttribute('data-d'))));gE.textContent=G;calc()})});
['input','change'].forEach(function(ev){bk.addEventListener(ev,function(e){if(e.target.matches('input,select'))calc()})});
document.addEventListener('rv-lang',function(){calc()});
addEventListener('scroll',sticky,{passive:true});sticky();
})();

(function(){var o=document.getElementById('lg'),b=document.getElementById('lg-o');
function op(){o.hidden=false;document.documentElement.classList.add('bk-open');requestAnimationFrame(function(){o.classList.add('on')})}
function cl(){o.classList.remove('on');document.documentElement.classList.remove('bk-open');setTimeout(function(){o.hidden=true},300);b.focus()}
b.addEventListener('click',op);document.getElementById('lg-x').addEventListener('click',cl);
o.addEventListener('click',function(e){if(e.target===o)cl()});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!o.hidden)cl()})})();
}catch(e){console.error(e)}
try{
(function(){var imgs=[].slice.call(document.querySelectorAll('.rv-frame img,.arc-cards img'));document.querySelectorAll('.emb').forEach(function(b,k){var im=imgs[k===0?0:Math.min(2,imgs.length-1)];if(im&&im.src)b.style.background='linear-gradient(rgba(15,33,26,.55),rgba(15,33,26,.7)),url('+im.src+') center/cover';})})();
var EMB_SANDBOX=/claude|anthropic/.test(location.hostname);
document.querySelectorAll('.emb').forEach(function(b){b.querySelector('.emb-go').addEventListener('click',function(){if(EMB_SANDBOX)return;var f=document.createElement('iframe');f.src=b.getAttribute('data-src');f.loading='lazy';f.allowFullscreen=true;f.referrerPolicy='no-referrer-when-downgrade';f.title=b.classList.contains('emb--tour')?'Sanal tur':'Harita';b.innerHTML='';b.appendChild(f)})})
}catch(e){console.error(e)}
try{
(function(){if(!/claude|anthropic/.test(location.hostname))return;document.querySelectorAll('.emb').forEach(function(b){var t=b.classList.contains('emb--tour');var u=t?'https://www.google.com/maps/search/?api=1&query=Ada%20CEYLAN%20Makina%20H%C4%B1rdavat%20Erenler':'https://www.google.com/maps/search/?api=1&query=Ada%20CEYLAN%20Makina%20H%C4%B1rdavat%20Erenler';var g=b.querySelector('.emb-go');var a=document.createElement('a');a.className='emb-go';a.href=u;a.target='_blank';a.rel='noopener';a.style.textDecoration='none';a.innerHTML=g.innerHTML+'<small style="font-weight:500;opacity:.8;font-size:.85rem">Önizlemede Google Haritalar\'da açılır · sitede burada oynar</small>';g.replaceWith(a)})})()
}catch(e){console.error(e)}
try{
(function(){var el=document.getElementById('intro');if(!el)return;
var seen=false;try{seen=sessionStorage.getItem('rv_intro')==='1';sessionStorage.setItem('rv_intro','1')}catch(e){}
if(seen||matchMedia('(prefers-reduced-motion: reduce)').matches){el.remove();return}
document.documentElement.style.overflow='hidden';
var c=el.querySelector('canvas'),x=c.getContext('2d'),W,H,D=Math.min(devicePixelRatio||1,1.5),stars=[],shoot=[],t0=performance.now(),run=true;
function rs(){W=c.width=innerWidth*D;H=c.height=innerHeight*D}rs();addEventListener('resize',rs);
for(var i=0;i<110;i++)stars.push({x:Math.random(),y:Math.random(),r:Math.random()*1.3+.2,p:Math.random()*6.28,s:.6+Math.random()*1.8});
function addShoot(){var a=Math.PI*(0.18+Math.random()*0.12);shoot.push({x:Math.random()*W*.9+W*.25,y:-20*D+Math.random()*H*.35,vx:-Math.cos(a)*(11+Math.random()*7)*D,vy:Math.sin(a)*(11+Math.random()*7)*D,l:0,max:(90+Math.random()*120)*D,life:1})}
var nx=0;
function f(now){if(!run)return;var t=(now-t0)/1000;x.clearRect(0,0,W,H);
for(var i=0;i<stars.length;i++){var s=stars[i],a=.25+.75*Math.abs(Math.sin(s.p+t*s.s));x.globalAlpha=a*Math.min(1,t*4);x.fillStyle=i%9?'#fff':'#f1d39a';x.beginPath();x.arc(s.x*W,s.y*H,s.r*D,0,6.28);x.fill()}
if(t>nx){addShoot();if(Math.random()<.5)addShoot();nx=t+.2+Math.random()*.3}
for(var j=shoot.length-1;j>=0;j--){var o=shoot[j];o.x+=o.vx;o.y+=o.vy;o.l=Math.min(o.max,o.l+28*D);o.life-=.012;
var mag=Math.hypot(o.vx,o.vy),tx=o.x-o.vx/mag*o.l,ty=o.y-o.vy/mag*o.l,g=x.createLinearGradient(o.x,o.y,tx,ty);
g.addColorStop(0,'rgba(255,240,210,'+Math.max(0,o.life)+')');g.addColorStop(.25,'rgba(233,196,120,'+Math.max(0,o.life*.6)+')');g.addColorStop(1,'rgba(233,196,120,0)');
x.globalAlpha=1;x.strokeStyle=g;x.lineWidth=1.8*D;x.lineCap='round';x.beginPath();x.moveTo(o.x,o.y);x.lineTo(tx,ty);x.stroke();
x.fillStyle='rgba(255,248,230,'+Math.max(0,o.life)+')';x.beginPath();x.arc(o.x,o.y,1.6*D,0,6.28);x.fill();
if(o.life<=0||o.x<-300*D||o.y>H+300*D)shoot.splice(j,1)}
requestAnimationFrame(f)}requestAnimationFrame(f);
function done(){if(el.classList.contains('out'))return;el.classList.add('out');document.documentElement.style.overflow='';setTimeout(function(){run=false;el.remove()},550)}
setTimeout(done,1800);el.addEventListener('click',done);addEventListener('keydown',done,{once:true})})()
}catch(e){console.error(e)}
try{
/* ---- Sanal tur: görünür olunca kendiliğinden ve tembel yüklenir; yüklenmezse sayfa bozulmaz ---- */
(function(){
  if(/claude|anthropic/.test(location.hostname))return;
  var box=document.querySelector('.emb--tour'); if(!box)return;
  var done=false;
  function load(){
    if(done)return; done=true;
    var f=document.createElement('iframe');
    f.src=box.getAttribute('data-src'); f.loading='lazy'; f.allowFullscreen=true;
    f.referrerPolicy='no-referrer-when-downgrade'; f.title='Ada Ceylan Makina';
    f.setAttribute('allow','fullscreen; accelerometer; gyroscope');
    var t=setTimeout(function(){ if(!f.classList.contains('ok')) fail(); },15000);
    f.addEventListener('load',function(){ clearTimeout(t); f.classList.add('ok'); var g=box.querySelector('.emb-go'); if(g) g.style.display='none'; });
    f.addEventListener('error',function(){ clearTimeout(t); fail(); });
    box.appendChild(f);
  }
  function fail(){
    if(box.querySelector('.emb-fail'))return;
    var d=document.createElement('div'); d.className='emb-fail';
    d.innerHTML=document.documentElement.lang==='en'?'The virtual tour could not load right now. <a href="https://www.google.com/maps/search/?api=1&query=Ada%20Ceylan%20Makina%20Erenler" target="_blank" rel="noopener">Open it in Google Maps →</a>':'Sanal tur şu an yüklenemedi. <a href="https://www.google.com/maps/search/?api=1&query=Ada%20Ceylan%20Makina%20Erenler" target="_blank" rel="noopener">Google Haritalar\'da açın →</a>';
    box.appendChild(d);
  }
  var go=box.querySelector('.emb-go');
  if(go){ var c=go.cloneNode(true); go.replaceWith(c); c.addEventListener('click',load); }
  if('IntersectionObserver' in window){
    var arm=function(){ new IntersectionObserver(function(es,o){ if(es[0].isIntersecting){ o.disconnect(); load(); } },{rootMargin:'150px 0px'}).observe(box); };
    var go2=function(){ setTimeout(arm,2200); };
    if(document.readyState==='complete') go2(); else addEventListener('load',go2,{once:true});
  }
})();

/* ---- Bölümler kayarken yumuşak belirsin ---- */
(function(){
  if(!('IntersectionObserver' in window))return;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var sel='.pb,.kt,.bn,.yrm-l li,.tour-p,.emb--tour,.emb-alt,.loc-t,.emb--map,.dir,.faq details,.steps li,.close-row,.more li,.intro p';
  var els=[].slice.call(document.querySelectorAll(sel));
  var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('on'); io.unobserve(e.target);} }); },{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(el,i){ if(el.getBoundingClientRect().top<innerHeight*.9)return; el.classList.add('rv-in'); el.style.transitionDelay=(i%4)*60+'ms'; io.observe(el); });
})();

/* ---- Arka plan müziği: ilk dokunuşta yumuşak başlar, kapatılırsa kapalı kalır ---- */
(function(){
  var btn=document.getElementById('rv-snd'); if(!btn)return;
  var SRC='assets/ambient.mp3', VOL=0.16, KEY='rv_music';
  var pref=null; try{pref=localStorage.getItem(KEY)}catch(e){}
  var ctx=null,gain=null,src=null,buf=null,el=null,playing=false,loading=false;
  function setBtn(on){ var en=document.documentElement.lang==='en'; btn.setAttribute('aria-pressed',on?'true':'false'); btn.setAttribute('aria-label',on?(en?'Turn background music off':'Arka plan müziğini kapat'):(en?'Turn background music on':'Arka plan müziğini aç')); btn.title=en?'Music':'Müzik'; }
  document.addEventListener('rv-lang',function(){ setBtn(playing); });
  function save(v){ try{localStorage.setItem(KEY,v)}catch(e){} }
  function fadeTo(v,sec){
    if(gain&&ctx){ var n=ctx.currentTime; gain.gain.cancelScheduledValues(n); gain.gain.setValueAtTime(gain.gain.value,n); gain.gain.linearRampToValueAtTime(v,n+sec); }
    else if(el){ var s=el.volume,st=performance.now(); (function step(){ var k=Math.min(1,(performance.now()-st)/(sec*1000)); try{el.volume=s+(v-s)*k}catch(e){} if(k<1)requestAnimationFrame(step); else if(v===0)el.pause(); })(); }
  }
  function start(){
    if(playing||loading)return;
    var AC=window.AudioContext||window.webkitAudioContext;
    if(AC){
      try{ ctx=ctx||new AC(); }catch(e){ ctx=null; }
    }
    if(ctx){
      if(ctx.state==='suspended')ctx.resume();
      if(buf){ play(); return; }
      loading=true;
      fetch(SRC).then(function(r){return r.arrayBuffer()}).then(function(a){
        return new Promise(function(res,rej){ ctx.decodeAudioData(a,res,rej); });
      }).then(function(b){ buf=b; loading=false; play(); }).catch(function(){ loading=false; ctx=null; startEl(); });
    } else startEl();
  }
  function play(){
    gain=gain||ctx.createGain(); gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0,ctx.currentTime);
    src=ctx.createBufferSource(); src.buffer=buf; src.loop=true; src.connect(gain); src.start(0);
    playing=true; setBtn(true); fadeTo(VOL,3.5);
  }
  function startEl(){
    el=el||new Audio(SRC); el.loop=true; el.preload='none'; try{el.volume=0}catch(e){}
    var p=el.play(); if(p&&p.then)p.then(function(){ playing=true; setBtn(true); fadeTo(VOL,3.5); }).catch(function(){});
    else { playing=true; setBtn(true); fadeTo(VOL,3.5); }
  }
  function stop(){
    if(!playing)return; playing=false; setBtn(false);
    if(ctx&&src){ var s=src; fadeTo(0,1.2); setTimeout(function(){ try{s.stop()}catch(e){} },1300); src=null; }
    else if(el){ fadeTo(0,1.2); }
  }
  btn.addEventListener('click',function(e){ e.stopPropagation(); if(playing){ stop(); save('off'); } else { save('on'); start(); } });
  function firstTouch(e){
    if(e && e.target && e.target.closest && e.target.closest('#rv-snd'))return;
    ['pointerdown','keydown','touchend'].forEach(function(t){ removeEventListener(t,firstTouch,true); });
    if(pref!=='off') start();
  }
  ['pointerdown','keydown','touchend'].forEach(function(t){ addEventListener(t,firstTouch,true); });
  setTimeout(function(){ btn.classList.add('show'); },1200);
  document.addEventListener('visibilitychange',function(){
    if(!ctx)return;
    if(document.hidden){ if(ctx.state==='running')ctx.suspend(); }
    else if(playing){ ctx.resume(); }
  });
  /* mobilde alttaki rezervasyon çubuğu açıkken düğmeyi yukarı al */
  var stick=document.getElementById('stick');
  if(stick&&'MutationObserver' in window){ new MutationObserver(function(){ document.documentElement.classList.toggle('rv-stick',stick.classList.contains('on')); }).observe(stick,{attributes:true,attributeFilter:['class']}); }
})();
}catch(e){console.error(e)}
try{
(function(){var l=document.querySelector('.logos');if(!l)return;
function ready(){if(l.classList.contains('in'))setTimeout(function(){l.classList.add('rz-ready')},1400);return l.classList.contains('in')}
if(!ready()&&'MutationObserver' in window){var mo=new MutationObserver(function(){if(ready())mo.disconnect()});mo.observe(l,{attributes:true,attributeFilter:['class']})}
})();
}catch(e){console.error(e)}
try{
(function(){
  var b=document.querySelector('.nav .pill[data-book]'); if(!b)return;
  var rm=matchMedia('(prefers-reduced-motion: reduce)'), over=false;
  b.addEventListener('pointerenter',function(e){ if(e.pointerType==='mouse') over=true; });
  b.addEventListener('pointerleave',function(){ over=false; });
  b.addEventListener('focus',function(){ over=true; }); b.addEventListener('blur',function(){ over=false; });
  b.addEventListener('animationend',function(){ b.classList.remove('rv-bounce'); });
  setInterval(function(){
    if(rm.matches||over||document.hidden)return;
    if(document.documentElement.classList.contains('bk-open'))return;
    b.classList.remove('rv-bounce'); void b.offsetWidth; b.classList.add('rv-bounce');
  },10000);
})();
}catch(e){console.error(e)}

/* Öğle menüsü canlı durum (İstanbul saati) */
(function(){var c=document.getElementById('og-live'),t=document.getElementById('og-live-t');if(!c||!t)return;
function upd(){var I=window.VA_I18N;if(!I)return;var D=I[document.documentElement.lang==='en'?'en':'tr'];var n=new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Istanbul'}));var d=n.getDay(),m=n.getHours()*60+n.getMinutes(),k,on=false;
var cl=(d===6)?960:1080;if(d===0)k='og_mon';else if(m>=480&&m<cl){k='og_on';on=true}else if(m<480)k='og_soon';else k=(d===6)?'og_mon':'og_tom';
t.textContent=D[k];c.classList.toggle('off',!on)}
upd();setInterval(upd,60000);new MutationObserver(upd).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});})();
