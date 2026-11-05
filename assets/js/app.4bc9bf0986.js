(function(){document.querySelectorAll('img').forEach(function(i){function f(){i.style.opacity=0}if(i.complete&&i.getAttribute('src')&&i.naturalWidth===0)f();i.addEventListener('error',f)})})();
try{
(function(){
var S=window.SITE||{},R=document.documentElement;
if(S.colors){if(S.colors.navy)R.style.setProperty('--navy',S.colors.navy);if(S.colors.yellow)R.style.setProperty('--y',S.colors.yellow)}
var up=function(s){return String(s||'').toLocaleUpperCase('tr')};
if(S.name)R.style.setProperty('--brand','"'+up(S.name).replace(/"/g,'')+'"');
var V={name:S.name,nameUp:up(S.name),tagline:S.tagline,taglineUp:up(S.tagline),phoneText:S.phoneText};
document.querySelectorAll('[data-site]').forEach(function(el){var v=V[el.getAttribute('data-site')];if(v)el.textContent=v});
if(S.phone)document.querySelectorAll('[data-tel]').forEach(function(a){a.href='tel:'+S.phone});
var soc=document.getElementById('ft-soc'),L={instagram:'Instagram',tiktok:'TikTok',facebook:'Facebook',youtube:'YouTube'};
if(soc&&S.social)Object.keys(L).forEach(function(k){var u=S.social[k];if(!u||!/^https:\/\//.test(u))return;var a=document.createElement('a');a.href=u;a.target='_blank';a.rel='noopener';a.className='ft-s';a.textContent=L[k];soc.appendChild(a)});
window.caWaHref=function(t){return 'https://wa.me/'+(S.whatsapp||'905359288250')+'?text='+encodeURIComponent(t||S.waText||'')};
document.querySelectorAll('.wa').forEach(function(a){a.href=window.caWaHref()});
})();

}catch(e){console.error(e)}
try{
try{
(function(){
  var root=document.documentElement, $=function(s){return document.querySelector(s)};
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp=function(v){return v<0?0:v>1?1:v};


  
  var CONTACT={whatsapp:(window.SITE&&SITE.whatsapp)||'905359288250'};
  var I18N={tr:{
title:"Google Ads, Google Haritalar ve Meta reklamları",
desc:"Mekanınız Google Haritalar'da üst sıralarda çıksın, aramalar ve yol tarifleri artsın. Google Ads, Performance Max, yerel reklam ve Meta (Instagram/Facebook) reklam yönetimi. Ücretsiz reklam analizi.",
skip:"İçeriğe geç",home:"Ana sayfa",top:"Yukarı çık",mtg:"Kanal seçin",
nav1:"Hizmetler",nav2:"Sonuçlar",nav3:"Süreç",nav4:"SSS",cta:"Ücretsiz analiz",cta_big:"Ücretsiz reklam analizi",call:"Ara",
hello:"Ceylan Ads",
cn1h:"Haritada 1. sıra",cn1p:"Mekanınız Google Haritalar'da en üstte",cn2h:"Daha çok arama",cn2p:"Daha çok yol tarifi, daha çok mesaj",cn3h:"Google · Haritalar · Meta",cn3p:"Tek ekip, tek rapor",cn4h:"Her hafta optimizasyon, her ay rapor",cn_hint:"Kaydırın",
days_sv:"Mekanınız Google Haritalar'da 1. sırada çıksın, aramalar ve yol tarifleri artsın.",
days_ads:"Instagram ve Facebook'ta bölgenizdeki müşteriye görünün; mesajlar doğrudan WhatsApp'ınıza gelsin.",
pick_label:"Kanal seçin",pick1:"Google Ads ve Haritalar",pick1s:"Arayan müşteri sizi önce görsün, haritada en üstte çıkın.",pick2:"Meta reklamları",pick2s:"Instagram ve Facebook'ta görünün, mesajlar WhatsApp'a gelsin.",
ads_h_sv:"Haritada 1. sıra, telefonda daha çok arama.",ads_h_ads:"Instagram'da görünün, WhatsApp'tan konuşun.",
ax1h_sv:"Arayan sizi bulsun",ax1_sv:"\"Yakınımdaki restoran\", \"Kadıköy diş kliniği\" gibi aramalarda işletmeniz üstte görünsün.",
ax2h_sv:"Haritada öne çıkın",ax2_sv:"Yerel reklam ve düzenli bir işletme profiliyle Google Haritalar'da üst sıralara çıkın.",
ax3h_sv:"Bütçe boşa gitmesin",ax3_sv:"Müşteri getirmeyen aramaları her hafta ayıklıyoruz; para, sonuç veren yere harcanır.",
ax1h_ads:"Doğru kişiye görünün",ax1_ads:"Reklamınız işletmenizin çevresindeki, ilgilenebilecek kişilere gösterilir.",
ax2h_ads:"Mesaj WhatsApp'a gelsin",ax2_ads:"Mesaj kampanyalarıyla müşteri tek dokunuşla size WhatsApp'tan yazar.",
ax3h_ads:"İşe yarayan büyüsün",ax3_ads:"Görsel ve metinleri test ederiz; mesaj getiren reklam büyür, getirmeyen değişir.",
uz_k:"Ekibimiz",uz_h:"Sertifikalı reklam ekibi",uz_p:"Reklam hesaplarınızı ekibimiz yönetir. Her karar tek bir soruya göre verilir: Bu reklam işletmeye müşteri getiriyor mu?",
uz1:"Müşteri getiren kelimeye dokunulmaz; önce boşa harcanan aramalar kesilir.",uz2:"Hesaplar her hafta kontrol edilir, her ay yazılı rapor gelir.",uz3:"Harcama, arama, yol tarifi ve mesaj sayısı: hepsini açıkça görürsünüz.",
cert_t:"Google Ads Arama Sertifikası (Skillshop, 2026)",cert_d:"Reklam ekibimiz Google'ın Skillshop sınavlarıyla sertifikalıdır.",
st_sr_sv:"Google'da arayan müşteri sizi bulsun.",st1_sv:"Google'da arayan",st2_sv:"sizi bulsun:",
st_sr_ads:"Instagram'da gezen müşteri size yazsın.",st1_ads:"Instagram'da gezen",st2_ads:"size yazsın:",
cyc_sv:["restoran.","otel.","diş kliniği.","kuaför.","spor salonu."],cyc_ads:["\"Yer var mı?\"","\"Fiyat nedir?\"","\"Randevu alabilir miyim?\"","\"Açık mısınız?\""],
rv_alt:"Sonuç panosu: İstanbul'da bir restoran 1 ayda 861 yol tarifi, Bursa'da bir restoran 463 arama ve yol tarifi",rv_b:"861 yol tarifi",rv_cap:"İstanbul'da bir restoran, 1 ayda. Yol tarifi başına yaklaşık 21 TL.",
res_h:"Sonuçlar.",res_p:"Müşteri adı paylaşmıyoruz; sektör ve şehirle anlatıyoruz. Rakamlar reklam hesaplarındaki gerçek verilerden.",
r1k:"İstanbul · Restoran",r1u:"yol tarifi, 1 ayda",r1t:"Yol tarifi başına ~21 TL",r2k:"Bursa · Restoran",r2u:"arama ve yol tarifi, 1 ayda",r2t:"Tanesi ~17 TL",
r3k:"Deneyim",r3h:"Sağlık turizmi, otel ve klinik",r3u:"Bu sektörlerde de reklam yönettik: arama, mesaj ve form odaklı kampanyalar.",
res_f:"Her işletmenin sonucu bölgeye, rekabete ve bütçeye göre değişir. Ücretsiz analizde sizin için gerçekçi bir hedef konuşuruz.",
arc_h_sv:"Google'da ne yapıyoruz?",arc_h_ads:"Meta'da ne yapıyoruz?",swipe:"Yana kaydırın",
mani_label:"Ekibimizle çalışmak",
mani_sv:"Müşteri bugün bir yere gitmeden önce Google'a ve haritaya bakıyor. <em class='a'>Haritada üstte çıkan işletme aranır, yol tarifi alınır</em>; reklamı tıklamayla değil, kapınıza gelen müşteriyle ölçüyoruz.",
mani_ads:"Müşteri gününün bir kısmını Instagram'da geçiriyor. <em class='a'>Doğru reklam, sohbeti doğrudan WhatsApp'ınızda başlatır</em>; kaç kişinin yazdığını ve mesaj başına maliyeti her ay açıkça görürsünüz.",
more1:"Sonuçlar",more2:"Nasıl çalışıyoruz",more3:"Ücretsiz analiz iste",
sg_h:"Yerel işletmeler için reklam.",sg_p:"Restoran, otel, klinik, kuaför, spor salonu. Müşterisi yakından gelen her işletme için.",sg_b:"Sektörünüzü seçin",
ref_h:"Hangi sektör?",ref_note:"Sektörünüzü seçin; birkaç bilgiyi yazın, ücretsiz analiz için WhatsApp mesajınız hazır olsun.",
o1:"Restoran ve Kafe",o1s:"Yol tarifi ve rezervasyon",o2:"Otel",o2s:"Arama ve doğrudan rezervasyon",o3:"Klinik ve Diş",o3s:"Randevu ve arama",o4:"Kuaför ve Güzellik",o4s:"Randevu ve WhatsApp mesajı",o5:"Spor Salonu",o5s:"Üyelik ve deneme dersi",o6:"Yerel Hizmet",o6s:"Tesisatçı, oto servis, temizlik",rz:"Analiz iste",
w1:"Google'da.",w2:"Haritada.",w3:"Instagram'da.",w4a:"Müşteriniz sizi",w4b:"burada bulur.",
intro_sv:"Google Ads ve Haritalar reklamıyla, sizi arayan kişi rakibinizden önce sizi görür; arama ve yol tarifi doğrudan size gelir.",intro_ads:"Meta reklamlarıyla Instagram ve Facebook'ta bölgenizdeki kişilere görünürsünüz; ilgilenen kişi size doğrudan WhatsApp'tan yazar.",
ch_label:"Neden bizimle",
s1h:"Google Ads: Arama ve Performance Max",s1:"Bölgenizde işletmenizi arayan kişiye doğru kelimelerle görünün. Uygun işletmelerde Performance Max ile Arama, Haritalar ve YouTube tek kampanyada.",
s2h:"Google Haritalar'da üst sıra",s2:"Yerel reklam ve işletme profili düzeniyle haritada öne çıkın: kategori, saatler, fotoğraflar, yorum yanıtları. Arama ve yol tarifi doğrudan size gelir.",
s3h:"Meta reklamları",s3:"Instagram ve Facebook'ta bölgenizdeki kişilere görünün. Mesaj kampanyalarıyla müşteri size doğrudan WhatsApp'tan yazar.",
s4h:"360° sanal tur (tamamlayıcı)",s4:"İsteyen işletmeler için Google Haritalar'da içeriden gezilebilen 360° tur. Reklamın getirdiği kişi mekânı gelmeden görür.",
whl_h:"Yerel işletmelere.",whl_c:"Müşteriniz yakından geliyorsa.",whl_sr:"Restoran, kafe, otel, klinik, diş kliniği, kuaför, güzellik salonu, spor salonu ve yerel hizmet işletmeleri.",
proc_h:"Nasıl çalışıyoruz?",
p1h:"Analiz",p1:"İşletmenizi, bölgenizi, rakiplerinizi ve sizi arayan müşteriyi inceleriz. Ücretsizdir.",
p2h:"Kurulum",p2:"Kampanyalar, kelimeler, reklam metinleri, işletme profili ve dönüşüm ölçümü kurulur.",
p3h:"Haftalık optimizasyon",p3:"Her hafta hesaplara bakarız: boşa giden aramalar çıkar, sonuç getirenler korunur.",
p4h:"Aylık rapor",p4:"Her ay harcama, arama, yol tarifi ve mesaj sayısını ve gelecek ayın planını yazılı paylaşırız.",
terms1:"Reklam analizi ücretsiz.",terms2:"İşletmenizin adını ve şehrini yazmanız yeterli.",
team_h:"Ekibimiz.",team_p:"Her hesabı tek kişi değil, ekip takip eder. Strateji, kurulum, optimizasyon ve rapor ayrı ellerde ama tek planla yürür.",
tm1:"Strateji ve analiz",tm1s:"Hedef, bütçe ve plan",tm2:"Google Ads ve Haritalar",tm2s:"Arama, Performance Max, yerel",tm3:"Meta reklamları",tm3s:"Instagram, Facebook, WhatsApp",tm4:"Rapor ve takip",tm4s:"Haftalık kontrol, aylık rapor",
faq_h:"Merak edilenler",
q1:"Fiyat ne kadar?",q1a:"Yönetim ücreti işletmenize, hedefinize ve yönettiğimiz kanallara göre belirlenir. Önce ücretsiz analiz yaparız, sonra fiyatı yazılı teklifle iletiriz.",
q2:"Sözleşme süresi ne kadar?",q2a:"Çalışma süresini ilk görüşmede birlikte belirleriz ve teklifte açıkça yazarız. Sürpriz madde olmaz.",
q3:"Reklam bütçesi kimin kartından çekilir?",q3a:"Reklam bütçesi Google ve Meta'ya doğrudan sizin kartınızdan ödenir; reklam hesabı da sizin işletmenize aittir. Bize ödediğiniz, yalnızca yönetim ücretidir.",
q4:"Rapor ne sıklıkla geliyor?",q4a:"Her ay yazılı rapor gönderiyoruz: harcama, arama, yol tarifi, mesaj ve gelecek ayın planı. Hesaplar her hafta kontrol edilir.",
q5:"Ne kadar reklam bütçesi gerekir?",q5a:"Sektöre, şehre ve rekabete göre değişir. Analizde hedefinize uygun bütçeyi öneririz; bütçeye siz karar verirsiniz.",
q6:"Ne zaman sonuç görürüm?",q6a:"Reklam yayına girdiği gün görünmeye başlar. Sağlıklı karar için ilk haftaların verisini izleyip ona göre ilerleriz.",
q7:"360° sanal tur da yapıyor musunuz?",q7a:"Evet, tamamlayıcı hizmet olarak. Reklamın getirdiği kişi Google Haritalar'da mekânınızı içeriden görür.",
close_h:"Ücretsiz analiz",close_p:"İşletmenizin adını ve şehrini WhatsApp'tan yazın; reklam durumunuzu inceleyip size dönelim.",close_wa:"WhatsApp'tan yazın",close_form:"Formla gönderin",
credit:"Reklam Ajansı",pv:"Gizlilik ve çerezler",
pv_t:"Verileriniz bu sayfada nasıl kullanılıyor?",
pv1:"Bu sayfa kendi çerezini kullanmaz; ziyaretçi takibi, analitik ya da reklam aracı içermez.",
pv2:"Formdaki bilgiler yalnızca WhatsApp mesajını hazırlamak için tarayıcınızda kullanılır; bir sunucuya kaydedilmez.",
pv3:"Mesajı gönderdiğinizde bilgileriniz WhatsApp üzerinden ekibimize iletilir ve WhatsApp'ın kendi gizlilik koşulları geçerli olur.",
m_k:"Ücretsiz reklam analizi",m_t:"Birkaç bilgi yazın, mesajınız hazır olsun.",m_svc:"Hizmet",m_occ:"Sektör",
m_biz:"İşletme adı",m_city:"Şehir / ilçe",m_date:"Uygun gün (isteğe bağlı)",m_name:"Adınız (isteğe bağlı)",m_note:"Notunuz (isteğe bağlı)",
m_sum:"Özet",m_tot:"Talep",m_send:"WhatsApp ile gönder",m_call:"Hemen ara",m_fine:"Mesajınız WhatsApp'tan doğrudan ekibimize gider; size kısa sürede dönüş yapılır.",
reel_label:"Ücretsiz analiz",reel:"Ücretsiz analiz"
}};I18N.en=I18N.tr;

  if(window.SITE){if(SITE.name)I18N.tr.hello=SITE.name;if(SITE.tagline)I18N.tr.credit=SITE.tagline}
  function MODE(){return root.getAttribute('data-mode')==='ads'?'ads':'sv'}
  (function(){var m='sv';try{var q=new URLSearchParams(location.search).get('kanal');if(q==='meta')m='ads';else if(q==='google')m='sv';else{var st=sessionStorage.getItem('ca_mode');if(st==='ads')m='ads'}}catch(e){}root.setAttribute('data-mode',m)})();
  var lang='tr', ready0=false;
  try{var q=new URLSearchParams(location.search).get('lang');if(q==='en'||q==='tr')lang=q;else{var s=localStorage.getItem('lang');if(s==='en')lang='en'}}catch(e){}
  function waLinks(){if(window.caWaHref)document.querySelectorAll('.wa').forEach(function(a){a.href=window.caWaHref()})}waLinks();
  
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
  function setLang(l){
    lang=l; var D=I18N[l];
    root.lang=l;
    var M=MODE();document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n'),v=D[k+'_'+M];if(v==null)v=D[k];if(v!=null&&el.textContent!==v)el.textContent=v});document.querySelectorAll('[data-i18n-ph]').forEach(function(el){var v=D[el.getAttribute('data-i18n-ph')];if(v)el.placeholder=v});
    document.querySelectorAll('[data-i18n-alt]').forEach(function(el){var v=D[el.getAttribute('data-i18n-alt')];if(v)el.alt=v});
    document.querySelectorAll('[data-i18n-label]').forEach(function(el){var v=D[el.getAttribute('data-i18n-label')];if(v)el.setAttribute('aria-label',v)});
    document.querySelectorAll('.brand').forEach(function(a){a.setAttribute('aria-label',brand+' · '+(a.closest('footer')?D.top:D.home))});
    document.title=brand+' · '+D.title;
    var md=document.querySelector('meta[name=description]'); if(md)md.content=D.desc;
    $('#day').textContent=D['days_'+M];
    ci=0; var CY=D['cyc_'+M]; if(cyc.textContent!==CY[0])cyc.textContent=CY[0];
    mani.innerHTML=D['mani_'+M]; splitMani();
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-lang')===l)});
    
    if(window.rvTx)window.rvTx(l);
    try{document.dispatchEvent(new CustomEvent('rv-lang',{detail:l}))}catch(e){}
    if(ready0)update();
  }
  document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){var l=b.getAttribute('data-lang');try{localStorage.setItem('lang',l)}catch(e){}setLang(l)})});
  var brand=(window.SITE&&SITE.name)||'Ceylan Ads';
  setLang(lang);

  function pressMode(){var M=MODE();document.querySelectorAll('[data-set-mode]').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-set-mode')===M)})}
  pressMode();
  function setMode(m,go){
    if(m!==MODE()){
      root.setAttribute('data-mode',m);try{sessionStorage.setItem('ca_mode',m)}catch(e){}
      root.classList.remove('m-swap');void root.offsetWidth;root.classList.add('m-swap');setTimeout(function(){root.classList.remove('m-swap')},700);
      setLang(lang);pressMode();
      try{history.replaceState(null,'',location.pathname+'?kanal='+(m==='ads'?'meta':'google'))}catch(e){}
      layout();motion();update();
      try{document.dispatchEvent(new CustomEvent('ys-mode',{detail:m}))}catch(e){}
    }
    if(go){var t=document.getElementById('akis');if(t){if(window.ysLenis)window.ysLenis.scrollTo(t,{offset:-10,duration:1.5});else t.scrollIntoView({behavior:'smooth'})}}
  }
  document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-set-mode]');if(!b)return;e.preventDefault();setMode(b.getAttribute('data-set-mode'),b.hasAttribute('data-go'))});
  requestAnimationFrame(function(){requestAnimationFrame(function(){$('.hero').classList.add('in')})});

  
  if(!reduce) setInterval(function(){
    if(document.hidden)return;
    var list=I18N[lang]['cyc_'+MODE()];
    cyc.classList.add('out');
    setTimeout(function(){ci=(ci+1)%list.length;cyc.textContent=list[ci%list.length];cyc.classList.remove('out')},450);
  },2600);

  
  var LITE=matchMedia('(max-width:760px)').matches;var nav=$('#nav'), darks=document.querySelectorAll('[data-dark]'), lines=LITE?[]:document.querySelectorAll('.big .ln, .h2, .arc-h, .wh-h, .svc h3'), reel=$('#reel'), more=$('.more'), refs=$('#referenzen'), hero=$('.hero');
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
    
    var mo=more.getBoundingClientRect(), rf=refs.getBoundingClientRect(), zone=vh-reel.offsetHeight-40;
    reel.classList.toggle('show',mo.top<vh*.9&&rf.bottom>vh*.55&&!(mo.bottom>zone&&mo.top<vh));
  }
  
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
    if(!reduce&&!LITE){for(var si=0;si<svcLi.length-1;si++){var a=svcLi[si].getBoundingClientRect(), b=svcLi[si+1].getBoundingClientRect(), ov=clamp((a.bottom-b.top)/(a.height||1));
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

  
  var rc=reel.querySelector('canvas'), rx=rc.getContext('2d'), poster={complete:false}, reelOn=false, rt0=performance.now();
  function drawReel(now){
    var W=rc.width,H=rc.height,t=(now-rt0)/1000,s=96,off=(reduce?0:t*14)%s;
    rx.fillStyle='#0B1220';rx.fillRect(0,0,W,H);
    for(var y=-1;y<6;y++)for(var x=-1;x<8;x++){
      var px=x*s+(y%2?s/2:0)-off, py=y*s-off*.5;
      rx.save();rx.translate(px+s/2,py+s/2);rx.rotate((((x*7+y*3)%5+5)%5-2)*.07);
      if(poster.complete&&poster.naturalWidth)rx.drawImage(poster,-s*.5,-s*.5,s,s);
      else{rx.fillStyle=((x+y)%3===0?'#FFD23F':(x+y)%3===1?'#2f5fd0':'#8a93a3');rx.beginPath();rx.moveTo(0,-s*.22);rx.lineTo(s*.14,0);rx.lineTo(0,s*.22);rx.lineTo(-s*.14,0);rx.closePath();rx.fill()}
      rx.restore();
    }
    if(reelOn&&!reduce)requestAnimationFrame(drawReel);
  }
  new MutationObserver(function(){
    var on=reel.classList.contains('show');
    if(on&&!reelOn){reelOn=true;requestAnimationFrame(drawReel)} else if(!on)reelOn=false;
  }).observe(reel,{attributes:true,attributeFilter:['class']});


})();

(function(){var o=document.getElementById('lg'),b=document.getElementById('lg-o');
function op(){o.hidden=false;document.documentElement.classList.add('bk-open');requestAnimationFrame(function(){o.classList.add('on')})}
function cl(){o.classList.remove('on');document.documentElement.classList.remove('bk-open');setTimeout(function(){o.hidden=true},300);b.focus()}
b.addEventListener('click',op);document.getElementById('lg-x').addEventListener('click',cl);
o.addEventListener('click',function(e){if(e.target===o)cl()});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!o.hidden)cl()})})();
}catch(e){console.error(e)}
}catch(e){console.error(e)}
try{

(function(){
  if(!('IntersectionObserver' in window))return;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var sel='.tour-p,.emb--tour,.emb-alt,.loc-t,.emb--map,.dir,.faq details,.steps li,.close-row,.more li,.intro p';
  var els=[].slice.call(document.querySelectorAll(sel));
  var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('on'); io.unobserve(e.target);} }); },{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(el,i){ if(el.getBoundingClientRect().top<innerHeight*.9)return; el.classList.add('rv-in'); el.style.transitionDelay=(i%4)*60+'ms'; io.observe(el); });
})();

}catch(e){console.error(e)}
try{
try{

(function(){
var $=function(s){return document.querySelector(s)},$$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var PHONE=(window.SITE&&SITE.whatsapp)||'905359288250';
var TXT={tr:{sv:'Google Ads ve Haritalar',ads:'Meta reklamları',both:'Google ve Meta',restoran:'Restoran / Kafe',otel:'Otel',klinik:'Klinik / Diş',kuafor:'Kuaför / Güzellik',spor:'Spor salonu',hizmet:'Yerel hizmet',diger:'Diğer',
  svc:'Hizmet',type:'Sektör',biz:'İşletme',city:'Şehir',day:'Uygun gün',name:'Ad',note:'Not',hi:'Merhaba, siteniz üzerinden ücretsiz reklam analizi istiyorum.',end:'Teşekkürler.'}};TXT.en=TXT.tr;
var bk=$('#bk'),din=$('#bk-date'),lines=$('#bk-lines'),tot=$('#bk-total'),wa=$('#bk-wa'),stick=$('#stick'),opener=null;
function L(){return document.documentElement.lang==='en'?'en':'tr'}
function iso(d){var m=d.getMonth()+1,x=d.getDate();return d.getFullYear()+'-'+(m<10?'0':'')+m+'-'+(x<10?'0':'')+x}
function long(v){if(!v)return '';var p=v.split('-');var d=new Date(+p[0],+p[1]-1,+p[2]);return d.toLocaleDateString(L()==='en'?'en-GB':'tr-TR',{weekday:'long',day:'numeric',month:'long'})}
din.min=iso(new Date());
function val(n){var r=$('input[name='+n+']:checked');return r?r.value:''}
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function calc(){
  var T=TXT[L()],biz=$('#bk-biz').value.trim(),city=$('#bk-city').value.trim(),name=$('#bk-n').value.trim(),note=$('#bk-note').value.trim();
  var rows=[[T.svc,T[val('bk-svc')]||T.sv],[T.type,T[val('bk-occ')]||T.diger]];
  if(biz)rows.push([T.biz,biz]); if(city)rows.push([T.city,city]); if(din.value)rows.push([T.day,long(din.value)]);
  if(name)rows.push([T.name,name]); if(note)rows.push([T.note,note]);
  lines.innerHTML=rows.map(function(r){return '<div><span>'+esc(String(r[0]))+'</span><em>'+esc(String(r[1]))+'</em></div>'}).join('');
  tot.textContent=T[val('bk-svc')]||T.sv;
  var msg=T.hi+'\n'+rows.map(function(r){return r[0]+': '+r[1]}).join('\n')+'\n'+T.end;
  wa.href='https://wa.me/'+PHONE+'?text='+encodeURIComponent(msg);
}
function open(o,el){
  opener=el||null;
  var m=document.documentElement.getAttribute('data-mode')==='ads'?'ads':'sv';
  var sv=$$('input[name=bk-svc]').filter(function(i){return i.value===m})[0]; if(sv)sv.checked=true;
  if(o){var x=$$('input[name=bk-occ]').filter(function(i){return i.value===o})[0];if(x)x.checked=true}
  bk.hidden=false;document.documentElement.classList.add('bk-open');stick.classList.remove('on');
  if(window.ysLenis)window.ysLenis.stop();
  calc();requestAnimationFrame(function(){bk.classList.add('on');var f=$('#bk-biz');if(f)f.focus({preventScroll:true})});
}
function close(){
  bk.classList.remove('on');document.documentElement.classList.remove('bk-open');if(window.ysLenis)window.ysLenis.start();
  setTimeout(function(){bk.hidden=true},300);if(opener&&opener.focus)opener.focus({preventScroll:true});sticky();
}
function sticky(){stick.classList.toggle('on',bk.hidden&&scrollY>innerHeight*.7)}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-book]');if(a){e.preventDefault();open(a.getAttribute('data-occ'),a)}});
$('#bk-x').addEventListener('click',close);
bk.addEventListener('click',function(e){if(e.target===bk)close()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!bk.hidden)close()});
['input','change'].forEach(function(ev){bk.addEventListener(ev,function(e){if(e.target.matches('input,select'))calc()})});
document.addEventListener('rv-lang',function(){calc()});
addEventListener('scroll',sticky,{passive:true});sticky();
})();
}catch(e){console.error(e)}
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
try{

(function(){
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduce||!window.gsap||!window.ScrollTrigger)return;
gsap.registerPlugin(ScrollTrigger);
var root=document.documentElement;
if(window.Lenis){
  var lenis=new Lenis({lerp:.1,wheelMultiplier:.95,smoothWheel:true,syncTouch:false});
  window.ysLenis=lenis; root.classList.add('ys-lenis'); if(window.ysIntroActive||root.classList.contains('ys-intro'))lenis.stop();
  lenis.on('scroll',ScrollTrigger.update);
  gsap.ticker.add(function(t){lenis.raf(t*1000)}); gsap.ticker.lagSmoothing(0);
  document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||a.hasAttribute('data-book'))return;var id=a.getAttribute('href');if(id.length<2)return;var t=document.querySelector(id);if(!t)return;e.preventDefault();lenis.scrollTo(t,{offset:-64,duration:1.4})});
}


gsap.to('.hero-text',{yPercent:-18,opacity:.0,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
function build(){
  ScrollTrigger.getAll().forEach(function(s){if(s.vars&&s.vars.id&&String(s.vars.id).indexOf('ys-')===0)s.kill()});
  
  gsap.utils.toArray('main .h2:not(.wrap), .adsx-i, .uz-t > *, .tm li, .res-c, .res-p').forEach(function(el){
    if(!el.offsetParent)return;
    gsap.fromTo(el,{y:46,opacity:0},{y:0,opacity:1,duration:1.05,ease:'power3.out',scrollTrigger:{id:'ys-t',trigger:el,start:'top 88%',toggleActions:'play none none reverse'}});
  });
  
  gsap.utils.toArray('.svc .shot, .st-img').forEach(function(img){
    if(!img.offsetParent)return;
    gsap.fromTo(img,{scale:1.18,clipPath:'inset(10% 6% 10% 6% round 22px)'},{scale:1,clipPath:'inset(0% 0% 0% 0% round 22px)',ease:'none',scrollTrigger:{id:'ys-i',trigger:img,start:'top 95%',end:'top 35%',scrub:.6}});
  });
  var cert=document.querySelector('.cert');
  if(cert&&cert.offsetParent)gsap.fromTo(cert,{rotateY:-28,rotateX:8,y:80,opacity:0,transformPerspective:1200},{rotateY:-9,rotateX:3,y:0,opacity:1,ease:'power3.out',scrollTrigger:{id:'ys-x',trigger:cert,start:'top 92%',end:'top 40%',scrub:.8}});
  ScrollTrigger.refresh();
}
build();
document.addEventListener('ys-mode',function(){setTimeout(build,60)});
addEventListener('load',function(){ScrollTrigger.refresh()});
})();
}catch(e){console.error(e)}

try{(function(){var h=document.querySelector('.hero');if(!h||!('IntersectionObserver' in window))return;new IntersectionObserver(function(es){document.documentElement.classList.toggle('ys-hero',es[0].intersectionRatio>.35)},{threshold:[0,.35,.6,1]}).observe(h)})()}catch(e){}

try{

(function(){var p=null;window.ysThree=function(){if(window.THREE)return Promise.resolve(window.THREE);if(p)return p;p=new Promise(function(res,rej){var s=document.createElement('script');s.src='assets/js/vendor/three.min.js';s.onload=function(){res(window.THREE)};s.onerror=rej;document.head.appendChild(s)});return p}})();
}catch(e){console.error(e)}

try{

(function(){var el=document.getElementById('intro');if(!el)return;
var root=document.documentElement,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var seen=false;try{seen=sessionStorage.getItem('ys_intro')==='1';sessionStorage.setItem('ys_intro','1')}catch(e){}
var SP=seen?1.45:1; 
root.classList.add('ys-intro');window.ysIntroActive=true;root.style.overflow='hidden';

var h1s=document.querySelector('.hero h1 [data-i18n=hello]');
if(h1s){var tx=h1s.textContent;h1s.setAttribute('aria-label',tx);h1s.innerHTML=tx.split('').map(function(c){return '<span class="ch" aria-hidden="true">'+(c===' '?'&nbsp;':c)+'</span>'}).join('')}
var c=el.querySelector('canvas'),x=c.getContext('2d'),svg=el.querySelector('.lg-svg'),D=Math.min(devicePixelRatio||1,2),W,H,CX,CY,R,t0=performance.now(),run=true;
function rs(){W=c.width=innerWidth*D;H=c.height=innerHeight*D;var r=svg.getBoundingClientRect(),k=r.width/420;CX=(r.left+210*k)*D;CY=(r.top+108*k)*D;R=96*k*D}
rs();addEventListener('resize',rs);
var DEG=Math.PI/180,YEL=((window.SITE&&SITE.colors&&SITE.colors.yellow)||'#FFD23F'),NAVY=((window.SITE&&SITE.colors&&SITE.colors.navy)||'#0B1220');
var RB=[
 {col:[230,236,245], r:70/97, a0:138.2, a1:197.5, w:10/97, from:function(){return [-.25*W,CY+.32*H]}, amp:.16, ph:0},
 {col:[255,210,63],r:81/97, a0:205,   a1:339.7, w:13/97, from:function(){return [1.2*W,1.15*H]},   amp:.2,  ph:2.1},
 {col:[61,99,201],r:81/97, a0:20.6,  a1:108,   w:13/97, from:function(){return [1.15*W,-.2*H]},   amp:.18, ph:4.2}
];
var N=64,drops=[];
function ease(u){return u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2}
function cl(v){return v<0?0:v>1?1:v}
function pt(rb,s,t,form){
  var a=(rb.a0+(rb.a1-rb.a0)*s)*DEG, tx=CX+Math.cos(a)*rb.r*R, ty=CY+Math.sin(a)*rb.r*R;
  var f=rb.from(), mx=CX+Math.cos((rb.a0+rb.a1)/2*DEG)*R*.2, my=CY+Math.sin((rb.a0+rb.a1)/2*DEG)*R*.2;
  var q=s*.92+t*.35, bx=f[0]+(mx-f[0])*q, by=f[1]+(my-f[1])*q;
  var dx=mx-f[0],dy=my-f[1],dl=Math.hypot(dx,dy)||1,nx=-dy/dl,ny=dx/dl;
  var w=Math.sin(s*7.5-t*5.2+rb.ph)*rb.amp*Math.min(W,H)*(1-form*.8);
  bx+=nx*w;by+=ny*w;
  var sw=(1-form)*2.2, ca=Math.cos(sw*form*1.6), sa=Math.sin(sw*form*1.6), rx=bx-CX, ry=by-CY;
  bx=CX+rx*ca-ry*sa; by=CY+rx*sa+ry*ca;
  var e=ease(form);
  return [bx+(tx-bx)*e, by+(ty-by)*e];
}
function shade(c,k){return 'rgb('+Math.round(Math.min(255,c[0]*k))+','+Math.round(Math.min(255,c[1]*k))+','+Math.round(Math.min(255,c[2]*k))+')'}
function ribbon(rb,t,form){
  var head=cl(t/0.95), pts=[];
  for(var i=0;i<=N;i++){pts.push(pt(rb,head*i/N,t,form))}
  var Wd=(rb.w+(1-ease(form))*.3)*R;
  for(var p=0;p<2;p++){
    for(i=0;i<N;i++){
      var a=pts[i],b=pts[i+1],dx=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dx,dy)||1,nx=-dy/l,ny=dx/l;
      var tp=Math.pow(Math.sin(Math.PI*Math.min(1,(i+.5)/N*1.02)),.32*(1-form));
      var lw=Math.max(1,Wd*(form>.6?1:tp)), lit=nx*-.55+ny*-.83;
      if(p===0){x.strokeStyle=shade(rb.col,.62+.5*(lit+1)/2*1.15);x.lineWidth=lw;x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.stroke()}
      else if(lit>0){x.strokeStyle='rgba(255,255,255,'+(.42*lit*(1-form*.55)).toFixed(3)+')';x.lineWidth=lw*.22;x.beginPath();
        x.moveTo(a[0]+nx*-lw*.22,a[1]+ny*-lw*.22);x.lineTo(b[0]+nx*-lw*.22,b[1]+ny*-lw*.22);x.stroke()}
    }
  }
  if(form<.55&&head<1&&Math.random()<.5){var h=pts[N];drops.push({x:h[0],y:h[1],vx:(Math.random()-.5)*7*D,vy:(Math.random()-.5)*7*D,r:(2+Math.random()*5)*D,c:rb.col,l:1})}
}
function draw(t){x.clearRect(0,0,W,H);x.lineCap='round';x.lineJoin='round';
  var form=cl((t-.95)/1.05), dk=cl((t-1.55)/.5);
  if(dk>0){x.save();x.globalAlpha=dk;x.shadowColor='rgba(0,0,0,.45)';x.shadowBlur=30*D;x.shadowOffsetY=10*D;x.fillStyle=YEL;x.beginPath();x.arc(CX,CY,R*(.9+.1*ease(dk)),0,6.283);x.fill();x.restore()}
  for(var i=0;i<RB.length;i++)ribbon(RB[i],t,form);
  for(var j=drops.length-1;j>=0;j--){var o=drops[j];o.x+=o.vx;o.y+=o.vy;o.vy+=.18*D;o.l-=.022;
    if(o.l<=0){drops.splice(j,1);continue}
    var g=x.createRadialGradient(o.x-o.r*.35,o.y-o.r*.35,o.r*.1,o.x,o.y,o.r);g.addColorStop(0,'rgba(255,255,255,'+o.l+')');g.addColorStop(.35,shade(o.c,1.1));g.addColorStop(1,shade(o.c,.55));
    x.globalAlpha=Math.max(0,o.l);x.fillStyle=g;x.beginPath();x.arc(o.x,o.y,o.r,0,6.283);x.fill();x.globalAlpha=1}
  var ck=cl((t-1.8)/.45);
  if(ck>0){var sc=ck<1?1+Math.sin(ck*Math.PI)*.18:1;x.save();x.globalAlpha=ck;x.translate(CX,CY+6/97*R);x.scale(sc,sc);var u=R/97;
    x.fillStyle=NAVY;x.beginPath();x.moveTo(0,50*u);x.bezierCurveTo(-12*u,34*u,-36*u,12*u,-36*u,-12*u);x.arc(0,-12*u,36*u,Math.PI,0);x.bezierCurveTo(36*u,12*u,12*u,34*u,0,50*u);x.closePath();x.fill();
    x.fillStyle=YEL;x.font='800 '+Math.round(38*u)+'px Montserrat,sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText('1',0,-10*u);x.restore()}
  if(t>1.95&&!el.classList.contains('word'))el.classList.add('word');
}
var T_END=2.55, opened=false;
function f(now){if(!run)return;var t=reduce?3:(now-t0)/1000*SP;draw(t);if(t>=T_END&&!opened){open()}requestAnimationFrame(f)}
requestAnimationFrame(f);
function finish(){run=false;el.classList.add('gone');root.classList.remove('ys-intro');root.style.overflow='';window.ysIntroActive=false;
  try{if(window.ysLenis)window.ysLenis.start()}catch(e){}try{if(window.ScrollTrigger)ScrollTrigger.refresh()}catch(e){}
  setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el)},50)}
function open(){if(opened)return;opened=true;
  var G=window.gsap, cine=document.getElementById('cine'), cv=cine&&cine.querySelector('.cine-cv'), first=cine&&cine.querySelector('.cine-t');
  if(!G){root.classList.remove('ys-intro');el.style.transition='opacity .6s';el.style.opacity=0;setTimeout(finish,650);heroIn();return}
  var tl=G.timeline({onComplete:finish});
  
  tl.to([c,svg],{scale:.9,opacity:0,duration:.45,ease:'power2.in',transformOrigin:'50% 40%'},0);
  
  tl.to(el.querySelector('.cur-t'),{yPercent:-101,duration:1.15,ease:'expo.inOut'},.35)
    .to(el.querySelector('.cur-b'),{yPercent:101,duration:1.15,ease:'expo.inOut'},.35);
  if(cv)tl.fromTo(cv,{scale:1.35,opacity:0},{scale:1,opacity:1,duration:1.9,ease:'expo.out',clearProps:'transform,opacity'},.45);
  if(first)tl.fromTo(first,{y:40,opacity:0},{y:0,opacity:1,duration:1.1,ease:'expo.out'},1.0);
  heroIn();
}

function heroIn(){
  var G=window.gsap,hero=document.querySelector('.hero'), chs=document.querySelectorAll('.hero h1 .ch'), stage=hero&&hero.querySelector('.stage'), day=document.querySelector('.hero .day'), mps=document.querySelectorAll('.mode-pick .mp');
  root.classList.remove('ys-intro');
  if(!G||!hero||!window.ScrollTrigger)return;
  var htl=G.timeline({paused:true});
  if(stage)htl.fromTo(stage,{scale:1.28},{scale:1,duration:1.9,ease:'expo.out',clearProps:'transform'},0);
  if(chs.length)htl.fromTo(chs,{yPercent:105,opacity:0},{yPercent:0,opacity:1,duration:1.05,ease:'expo.out',stagger:.035},.3);
  if(day)htl.fromTo(day,{y:24,opacity:0},{y:0,opacity:1,duration:.9,ease:'power3.out'},.6);
  if(mps.length)htl.fromTo(mps,{y:60,opacity:0,rotateX:-18,transformPerspective:900},{y:0,opacity:1,rotateX:0,duration:1.1,ease:'expo.out',stagger:.12,clearProps:'transform'},.7);
  ScrollTrigger.create({trigger:hero,start:'top 70%',once:true,onEnter:function(){htl.play()}});
}
function skip(){if(!opened){t0=performance.now()-T_END*1000/SP}}
el.addEventListener('click',skip);addEventListener('keydown',skip,{once:true});
setTimeout(function(){if(!opened)open()},6000);
})()
}catch(e){console.error(e);try{document.documentElement.classList.remove('ys-intro');document.documentElement.style.overflow='';var i=document.getElementById('intro');if(i)i.remove()}catch(_){}}

try{

(function(){
var sec=document.getElementById('cine');if(!sec)return;
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function webgl(){try{var c=document.createElement('canvas');return !!(c.getContext('webgl')||c.getContext('experimental-webgl'))}catch(e){return false}}
if(reduce)return;
if(!webgl()||!window.gsap||!window.ScrollTrigger){sec.classList.add('nogl');return}
var started=false;
new IntersectionObserver(function(es,o){if(es[0].isIntersecting&&!started){started=true;o.disconnect();window.ysThree().then(init).catch(function(){sec.classList.add('nogl')})}},{rootMargin:'120% 0px'}).observe(sec);
function dims(){var w=innerWidth,m=w<768,t=w>=768&&w<1024;return{m:m,maxR:m?1.8:t?2.2:2.5,camZ:m?6:t?7:8,fov:m?50:45}}
function init(T){
  var G=gsap; if(window.CustomEase){try{gsap.registerPlugin(CustomEase);
    CustomEase.create('cinematicSilk','0.45, 0.05, 0.55, 0.95');CustomEase.create('cinematicSmooth','0.25, 0.1, 0.25, 1');
    CustomEase.create('cinematicFlow','0.33, 0, 0.2, 1');CustomEase.create('cinematicLinear','0.4, 0, 0.6, 1')}catch(e){}}
  var E=function(n,f){return window.CustomEase&&CustomEase.get&&CustomEase.get(n)?n:f};
  var d=dims(), cv=sec.querySelector('.cine-cv'), renderer;
  try{renderer=new T.WebGLRenderer({canvas:cv,antialias:!d.m,alpha:false,powerPreference:'high-performance'})}catch(e){sec.classList.add('nogl');return}
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,d.m?1.25:2)); renderer.setClearColor(0x070c17,1);
  if('outputColorSpace' in renderer)renderer.outputColorSpace=T.SRGBColorSpace;
  var scene=new T.Scene(), cam=new T.PerspectiveCamera(d.fov,1,.1,100); cam.position.set(0,0,d.camZ);
  var CFG={radius:innerWidth>768?2.5:2.2,height:innerWidth>768?2:1.2};
  var srcs=(sec.getAttribute('data-imgs')||'').split(',').filter(Boolean), n=srcs.length;
  var limit=Math.min(renderer.capabilities.maxTextureSize,d.m?4096:8192), cell=Math.min(1024,Math.floor(limit/n));
  var tc=document.createElement('canvas'); tc.width=cell*n; tc.height=cell; var tctx=tc.getContext('2d',{alpha:false});
  tctx.fillStyle='#0a1424';tctx.fillRect(0,0,tc.width,tc.height);
  var tex=new T.CanvasTexture(tc); if('colorSpace' in tex)tex.colorSpace=T.SRGBColorSpace; tex.generateMipmaps=false; tex.minFilter=T.LinearFilter;
  function cover(img,x0,w,h){var ir=img.naturalWidth/img.naturalHeight,cr=w/h,sx=0,sy=0,sw=img.naturalWidth,sh=img.naturalHeight;
    if(ir>cr){sw=sh*cr;sx=(img.naturalWidth-sw)/2}else{sh=sw/cr;sy=(img.naturalHeight-sh)/2}tctx.drawImage(img,sx,sy,sw,sh,x0,0,w,h)}
  srcs.forEach(function(s,i){var im=new Image();im.decoding='async';im.onload=function(){cover(im,i*cell,cell,cell);tex.needsUpdate=true;render()};im.src=s});
  var geo=new T.CylinderGeometry(CFG.radius,CFG.radius,CFG.height,64,1,true);
  
  var hc=(2*Math.PI*CFG.radius/n)/CFG.height;
  var mat=new T.MeshBasicMaterial({map:tex,side:T.DoubleSide,color:new T.Color(.7,.7,.7)});
  var cyl=new T.Mesh(geo,mat); cyl.rotation.y=.5; var grp=new T.Group(); grp.add(cyl); scene.add(grp);
  function scaleCyl(){var dd=dims(),s=dd.maxR/CFG.radius;cyl.scale.set(s,dd.m?s*hc:s*Math.min(1,hc),s)}
  scaleCyl();
  
  var P=[],PN=d.m?8:12;
  for(var i=0;i<PN;i++){var seg=20,ang=Math.random()*Math.PI*2,span=.3,rad=CFG.radius+.8,y=(Math.random()-.5)*CFG.height*1.4,pos=new Float32Array((seg+1)*3);
    var g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(pos,3));
    var line=new T.Line(g,new T.LineBasicMaterial({color:0xffffff,transparent:true,opacity:0}));
    line.userData={base:ang,span:span,rad:rad,y:y,seg:seg,speed:.6+Math.random()*.8};scene.add(line);P.push(line)}
  function size(){var w=innerWidth,h=innerHeight;renderer.setSize(w,h,false);cam.aspect=w/h;cam.fov=dims().fov;cam.updateProjectionMatrix()}
  var lastW=innerWidth;
  addEventListener('resize',function(){if(dims().m&&innerWidth===lastW)return;lastW=innerWidth;size();scaleCyl();render()});
  var CA={x:0,y:0,z:d.camZ};
  var tl=G.timeline({scrollTrigger:{trigger:sec,start:'top top',end:'bottom bottom',scrub:1}});
  tl.to(CA,{x:0,y:0,z:d.camZ,duration:1,ease:E('cinematicSilk','sine.inOut')})
    .to(CA,{x:0,y:5,z:5,duration:1,ease:E('cinematicFlow','power2.out')})
    .to(CA,{x:1.5,y:2,z:2,duration:2,ease:E('cinematicLinear','sine.inOut')})
    .to(CA,{x:.5,y:0,z:.8,duration:3.5,ease:'power1.inOut'})
    .to(CA,{x:-6,y:-1,z:d.camZ,duration:1,ease:E('cinematicSmooth','power2.inOut')});
  tl.to(cyl.rotation,{y:'+=28.27',duration:8.5,ease:'none'},0);
  
  var texts=[].slice.call(sec.querySelectorAll('.cine-t')),L=texts.length;
  texts.forEach(function(t,i){var a=i*100/L,b=(i+1)*100/L;
    if(i===0&&sec===document.querySelector('main > section')){G.timeline({scrollTrigger:{trigger:sec,start:'top top',end:b+'% top',scrub:.8}}).to(t,{opacity:1,duration:.8,ease:'none'}).to(t,{opacity:0,y:-30,duration:.2,ease:E('cinematicSmooth','power2.in')});return}
    G.timeline({scrollTrigger:{trigger:sec,start:a+'% top',end:b+'% top',scrub:.8}})
      .fromTo(t,{opacity:0,y:30},{opacity:1,y:0,duration:.2,ease:E('cinematicSmooth','power2.out')})
      .to(t,{opacity:1,duration:.6,ease:'none'})
      .to(t,{opacity:0,y:-30,duration:.2,ease:E('cinematicSmooth','power2.in')})});
  var hint=sec.querySelector('.cine-hint');
  if(hint)G.to(hint,{opacity:0,ease:'none',scrollTrigger:{trigger:sec,start:'8% top',end:'14% top',scrub:true}});
  var lastRot=cyl.rotation.y,vel=0,running=false,raf=0,vis=false;
  var idle=0,lt=performance.now();
  function render(){
    var nw=performance.now(),dt=Math.min(.05,(nw-lt)/1000);lt=nw;grp.rotation.y+=dt*.12;
    cam.position.set(CA.x,CA.y,CA.z);cam.lookAt(0,0,0);
    vel=cyl.rotation.y-lastRot;lastRot=cyl.rotation.y;
    var sp=Math.abs(vel)*100,rot=Math.abs(vel)>.0001;
    for(var k=0;k<P.length;k++){var l=P[k],u=l.userData,m=l.material;
      m.opacity+=((rot?Math.min(sp*3,.95):0)-m.opacity)*.15;
      if(rot){u.base+=vel*u.speed*1.5;var a=l.geometry.attributes.position.array;
        for(var j=0;j<=u.seg;j++){var an=u.base+u.span*j/u.seg;a[j*3]=Math.cos(an)*u.rad;a[j*3+1]=u.y;a[j*3+2]=Math.sin(an)*u.rad}
        l.geometry.attributes.position.needsUpdate=true}}
    renderer.render(scene,cam);
  }
  function frame(){render();if(running)raf=requestAnimationFrame(frame)}
  function setRun(on){if(on&&!running){running=true;raf=requestAnimationFrame(frame)}else if(!on&&running){running=false;cancelAnimationFrame(raf)}}
  new IntersectionObserver(function(es){vis=es[0].isIntersecting;setRun(vis&&!document.hidden)}).observe(sec);
  document.addEventListener('visibilitychange',function(){setRun(vis&&!document.hidden)});
  size();render();ScrollTrigger.refresh();
}
})();
}catch(e){console.error(e)}

try{

(function(){
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduce||!window.gsap||!window.ScrollTrigger)return;
var G=gsap;

if(window.ysLenis){try{window.ysLenis.options.lerp=.085}catch(e){} if(window.ysIntroActive)window.ysLenis.stop()}
var mob=function(){return innerWidth<760};

function cards(){
  G.utils.toArray('.arc-cards .acard').forEach(function(card,i){
    if(!card.offsetParent)return;
    var amp=mob()?Math.min(innerWidth*.06,28):Math.min(innerWidth*.18,240), xo=Math.sin(i*1.25+.4)*amp, dir=xo>=0?1:-1, A=mob()?26:40, B=mob()?10:16, Z=mob()?-220:-420;
    G.set(card,{x:xo,transformPerspective:mob()?900:1400});
    G.timeline({scrollTrigger:{id:'ys-3d',trigger:card,start:'top bottom',end:'bottom top',scrub:true}})
      .fromTo(card,{rotationY:-dir*A,rotationX:B,z:Z,scale:.86,opacity:.35},{rotationY:0,rotationX:0,z:0,scale:1,opacity:1,ease:'power2.out',duration:.5})
      .to(card,{rotationY:dir*A,rotationX:-B,z:Z,scale:.86,opacity:.35,ease:'power2.in',duration:.5});
  });
}

function grid(){
  var sec=document.querySelector('.sg');if(!sec)return;
  var wrap=sec.querySelector('.sg-wrap'),gal=sec.querySelector('.sg-gal'),items=G.utils.toArray(sec.querySelectorAll('.sg-item'));
  var cols=[[],[],[]];items.forEach(function(it,i){cols[i%3].push(it)});
  var rows=Math.ceil(items.length/3);
  var tl=G.timeline({scrollTrigger:{id:'ys-sg',trigger:sec,start:'top 95%',end:'bottom bottom',scrub:true,
    onUpdate:function(s){var on=s.progress>.88;if(on!==sec.classList.contains('on')){sec.classList.toggle('on',on);txt(on)}}}});
  
  cols.forEach(function(c,ci){tl.from(c,{y:(ci%2===0?-1:1)*innerHeight*.45,opacity:0,duration:1,ease:'power3.out',stagger:.06},0)});
  
  tl.to(gal,{scale:mob()?1.6:2.05,duration:1,ease:'power2.inOut'},1.05);
  tl.to(cols[0],{xPercent:-40,duration:1,ease:'power2.inOut'},1.05);
  tl.to(cols[2],{xPercent:40,duration:1,ease:'power2.inOut'},1.05);
  cols[1].forEach(function(it,ri){tl.to(it,{yPercent:(ri<rows/2?-1:1)*40,duration:1,ease:'power2.inOut'},1.05)});
  tl.to(sec,{'--sgo':1,duration:.4,ease:'none'},1.7).to({},{duration:.25});
  var h=sec.querySelector('.sg-h'),p=sec.querySelector('.sg-p'),b=sec.querySelector('.sg-b');
  G.set(h,{yPercent:110,opacity:0});
  function txt(on){G.to(h,{yPercent:on?0:110,opacity:on?1:0,duration:.9,ease:'expo.out',overwrite:true});G.to([p,b],{opacity:on?1:0,y:on?0:16,duration:.7,ease:'power3.out',stagger:.08,overwrite:true})}
}

function flow(){
  G.utils.toArray('.reveal, .uzman, .wheel, .sg, .closing').forEach(function(s){
    if(!s.offsetParent)return; s.classList.add('ys-flow');
    G.fromTo(s,{clipPath:'inset(7% 5% 0% 5% round 44px)'},{clipPath:'inset(0% 0% 0% 0% round 0px)',ease:'none',scrollTrigger:{id:'ys-fl',trigger:s,start:'top bottom',end:'top 12%',scrub:true}});
  });
}
function all(){ScrollTrigger.getAll().forEach(function(s){var id=s.vars&&s.vars.id;if(id&&/^ys-(3d|sg|sg0|fl)$/.test(id))s.kill()});cards();grid();flow();ScrollTrigger.refresh()}
all();
document.addEventListener('ys-mode',function(){setTimeout(all,80)});
var rw=innerWidth;addEventListener('resize',function(){if(Math.abs(innerWidth-rw)>40){rw=innerWidth;all()}});
})();
}catch(e){console.error(e)}