/* ==========================================================================
   BS ENERGY INDIA - main.js
   Lightweight vanilla JS: WhatsApp lead system, mobile nav, reveal animations,
   counters, FAQ accordion, gallery filters + lightbox, enquiry form.
   ========================================================================== */

/* --------------------------------------------------------------------------
   EDITABLE COMPANY CONFIGURATION
   Replace the placeholder values below with the company's real contact details.
   -------------------------------------------------------------------------- */
var SITE_CONFIG = {
  phoneDisplay: "+91 99656 62266",   /* shown on screen wherever a number is displayed */
  phoneTel: "+919965662266",        /* used for tel: links    e.g. +919965662266       */
  whatsapp: "919965662266",         /* WhatsApp number, country code + number (no '+')  e.g. 919965662266 */
  emailDisplay: "bsenergyindia@gmail.com",
  emailLink: "mailto:bsenergyindia@gmail.com",
  instagram: "#",                   /* real Instagram URL */
  facebook: "#",                    /* real Facebook URL */
  address: "Sholavaram, Chennai, Tamil Nadu, India",
  googleAppsScriptUrl: "https://script.google.com/macros/s/AKfycbxC6L9E-aU5vvPJwdXfzN7lP45RYaaOP0STna--DxZ595JDohDYP2foxgMY1xgq2R6g6w/exec"           /* Web App URL deployed from Google Apps Script */
};

var WA_GENERAL = "Hello BS Energy India, I would like to enquire about your industrial energy equipment and services. Please contact me. My requirement is:";

function waLink(msg) {
  msg = msg || WA_GENERAL;
  return "https://wa.me/" + SITE_CONFIG.whatsapp + "?text=" + encodeURIComponent(msg);
}

document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.classList.remove("no-js");

  /* ---------- Apply config placeholders to links ---------- */
  var telLinks = document.querySelectorAll("[data-tel]");
  for (var i = 0; i < telLinks.length; i++) {
    telLinks[i].setAttribute("href", "tel:" + SITE_CONFIG.phoneTel);
  }

  var mailLinks = document.querySelectorAll("[data-email-link]");
  for (var e = 0; e < mailLinks.length; e++) {
    mailLinks[e].setAttribute("href", SITE_CONFIG.emailLink);
  }

  var waEls = document.querySelectorAll("[data-wa]");
  for (var w = 0; w < waEls.length; w++) {
    var msgW = waEls[w].getAttribute("data-wa-msg") || WA_GENERAL;
    waEls[w].setAttribute("href", waLink(msgW));
  }

  var socEls = document.querySelectorAll("[data-social]");
  for (var s = 0; s < socEls.length; s++) {
    var kind = socEls[s].getAttribute("data-social");
    if (kind === "instagram") socEls[s].setAttribute("href", SITE_CONFIG.instagram);
    if (kind === "facebook") socEls[s].setAttribute("href", SITE_CONFIG.facebook);
  }

  /* Fill visible placeholder texts */
  var ph = document.querySelectorAll("[data-fill='phone']");
  for (var p = 0; p < ph.length; p++) ph[p].textContent = SITE_CONFIG.phoneDisplay;
  var pe = document.querySelectorAll("[data-fill='email']");
  for (var q = 0; q < pe.length; q++) pe[q].textContent = SITE_CONFIG.emailDisplay;
  var pa = document.querySelectorAll("[data-fill='address']");
  for (var r = 0; r < pa.length; r++) pa[r].textContent = SITE_CONFIG.address;

  /* ---------- Header scroll state ---------- */
  var header = document.querySelector(".header");
  var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 12); };
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var mNav = document.querySelector(".mobile-nav");
  function closeMNav() {
    if (mNav) mNav.classList.remove("open");
    if (toggle) toggle.classList.remove("open");
  }
  if (toggle && mNav) {
    toggle.addEventListener("click", function () {
      mNav.classList.toggle("open");
      toggle.classList.toggle("open");
    });
    mNav.addEventListener("click", function (ev) {
      if (ev.target === mNav || ev.target.closest(".mobile-nav__close")) closeMNav();
    });
  }
  var mnavLinks = document.querySelectorAll(".mnav__link");
  for (var n = 0; n < mnavLinks.length; n++) {
    mnavLinks[n].addEventListener("click", closeMNav);
  }
/* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Active nav link on scroll ---------- */
  var sectionEls = document.querySelectorAll("section[id]");
  var allNavLinks = document.querySelectorAll(".nav__link, .mnav__link");
  if ("IntersectionObserver" in window && sectionEls.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        for (var i = 0; i < allNavLinks.length; i++) {
          var match = allNavLinks[i].getAttribute("href") === "#" + en.target.id;
          allNavLinks[i].classList.toggle("is-active", match);
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    for (var s = 0; s < sectionEls.length; s++) spy.observe(sectionEls[s]);
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in-view");
          revealIO.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    for (var r = 0; r < revealEls.length; r++) revealIO.observe(revealEls[r]);
  } else {
    for (var r2 = 0; r2 < revealEls.length; r2++) revealEls[r2].classList.add("in-view");
  }

  /* ---------- Animated counters ---------- */
  var counterEls = document.querySelectorAll("[data-count]");
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var duration = 1600;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString("en-IN");
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString("en-IN");
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && counterEls.length) {
    var counterIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateCounter(en.target); counterIO.unobserve(en.target); }
      });
    }, { threshold: 0.4 });
    for (var c = 0; c < counterEls.length; c++) counterIO.observe(counterEls[c]);
  } else {
    for (var c2 = 0; c2 < counterEls.length; c2++) animateCounter(counterEls[c2]);
  }

  /* ---------- FAQ accordion ---------- */
  var faqQs = document.querySelectorAll(".faq-q");
  for (var f = 0; f < faqQs.length; f++) {
    faqQs[f].addEventListener("click", function () {
      var item = this.parentElement;
      var ans = item.querySelector(".faq-a");
      var isOpen = item.classList.contains("open");
      var openItems = document.querySelectorAll(".faq-item.open");
      for (var k = 0; k < openItems.length; k++) {
        openItems[k].classList.remove("open");
        var a = openItems[k].querySelector(".faq-a");
        if (a) a.style.maxHeight = null;
      }
      if (!isOpen) {
        item.classList.add("open");
        if (ans) ans.style.maxHeight = ans.scrollHeight + "px";
      }
    });
  }

  /* ---------- Gallery filters + lightbox ---------- */
  var filters = document.querySelectorAll(".gal-filter");
  var galItems = document.querySelectorAll(".gal-item");
  var lightbox = document.querySelector(".lightbox");
  var lbImg = lightbox ? lightbox.querySelector(".lightbox__img") : null;
  var lbCount = lightbox ? lightbox.querySelector(".lightbox__count") : null;
  var visibleItems = [];

  function refreshVisible() {
    visibleItems = [];
    for (var g = 0; g < galItems.length; g++) {
      if (galItems[g].style.display !== "none") visibleItems.push(galItems[g]);
    }
  }
  if (filters.length) {
    for (var fl = 0; fl < filters.length; fl++) {
      filters[fl].addEventListener("click", function () {
        var fv = this.getAttribute("data-filter");
        for (var f2 = 0; f2 < filters.length; f2++) filters[f2].classList.remove("is-active");
        this.classList.add("is-active");
        for (var g2 = 0; g2 < galItems.length; g2++) {
          var cat = galItems[g2].getAttribute("data-cat");
          galItems[g2].style.display = (fv === "all" || cat === fv) ? "" : "none";
        }
        refreshVisible();
      });
    }
  }
  refreshVisible();

  if (lightbox && lbImg) {
    var lbCurrent = 0;
    function lbOpen() { lightbox.classList.add("open"); document.body.style.overflow = "hidden"; }
    function lbClose() { lightbox.classList.remove("open"); document.body.style.overflow = ""; }
    function lbShow(idx) {
      if (!visibleItems.length) return;
      lbCurrent = ((idx % visibleItems.length) + visibleItems.length) % visibleItems.length;
      var im = visibleItems[lbCurrent].querySelector("img");
      lbImg.src = im.getAttribute("data-full") || im.src;
      lbImg.alt = im.alt || "";
      if (lbCount) lbCount.textContent = (lbCurrent + 1) + " / " + visibleItems.length;
    }
    for (var gi = 0; gi < galItems.length; gi++) {
      galItems[gi].addEventListener("click", function () {
        refreshVisible();
        var ind = visibleItems.indexOf(this);
        if (ind === -1) return;
        lbShow(ind);
        lbOpen();
      });
    }
    var lbPrev = lightbox.querySelector(".lightbox__prev");
    var lbNext = lightbox.querySelector(".lightbox__next");
    var lbCloseBtn = lightbox.querySelector(".lightbox__close");
    if (lbPrev) lbPrev.addEventListener("click", function (e) { e.stopPropagation(); lbShow(lbCurrent - 1); });
    if (lbNext) lbNext.addEventListener("click", function (e) { e.stopPropagation(); lbShow(lbCurrent + 1); });
    if (lbCloseBtn) lbCloseBtn.addEventListener("click", function (e) { e.stopPropagation(); lbClose(); });
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) lbClose(); });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") lbClose();
      if (e.key === "ArrowLeft") lbShow(lbCurrent - 1);
      if (e.key === "ArrowRight") lbShow(lbCurrent + 1);
    });
  }

  /* ---------- Enquiry form ---------- */
  var form = document.getElementById("enquiry-form");
  var formErr = document.querySelector(".form-err");
  var formOk = document.querySelector(".form-success");
  function showErr(msg) {
    if (formErr) { formErr.textContent = msg; formErr.classList.add("show"); }
  }
  function hideErr() {
    if (formErr) { formErr.textContent = ""; formErr.classList.remove("show"); }
  }
  if (form) {
    var formInputs = form.querySelectorAll("input, select, textarea");
    for (var fi = 0; fi < formInputs.length; fi++) {
      formInputs[fi].addEventListener("input", hideErr);
    }
    var submitBtn = form.querySelector("button[type='submit']");
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      hideErr();
      var name = (form.querySelector("#f-name") || {}).value;
      var phone = (form.querySelector("#f-phone") || {}).value;
      var email = (form.querySelector("#f-email") || {}).value;
      var city = (form.querySelector("#f-city") || {}).value;
      var product = (form.querySelector("#f-product") || {}).value || "";
      var msg = (form.querySelector("#f-msg") || {}).value || "";
      name = (name || "").trim();
      phone = (phone || "").trim();

      if (!name) return showErr("Please enter your name.");
      if (!phone || phone.replace(/[^0-9]/g, "").length < 6) return showErr("Please enter a valid phone number.");

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Submitting...";
      }

      var payload = {
        timestamp: new Date().toISOString(),
        fullName: name,
        companyName: city ? city : "N/A",
        email: email || "N/A",
        phone: phone,
        requirement: product || "General Enquiry",
        message: msg || "No additional message"
      };

      var endpoint = SITE_CONFIG.googleAppsScriptUrl;
      if (endpoint && endpoint.indexOf("http") === 0) {
        fetch(endpoint, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }).then(function() {
          if (formOk) {
            formOk.textContent = "Thank you for contacting BS Energy India. Your enquiry has been submitted successfully. Our team will contact you shortly.";
            formOk.classList.add("show");
          }
          form.reset();
        }).catch(function() {
          showErr("Unable to submit your enquiry at this time. Please try again or contact us directly.");
        }).finally(function() {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send Enquiry";
          }
        });
      } else {
        if (formOk) {
          formOk.textContent = "Thank you for contacting BS Energy India. Your enquiry has been submitted successfully. Our team will contact you shortly.";
          formOk.classList.add("show");
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Enquiry";
        }
      }
    });
  }
});