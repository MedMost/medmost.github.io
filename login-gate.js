
const P={"s": "8Ctkl27cU76hD9xQKUnKMw==", "i": "mjpVcx2ehSE+w2zU", "d": "bdcL2UR32yKNv9QCEjn+fRqE0KfMJkpFeDJtpPJJc8zG7s27IAyfQ41WCS6x2OhV8l+ahb93X9qCZVnAtV8A+Vsdjt8lTLjIoUGmynAuMW0eolAVVcj/x8gEVevruY4Ivak7neLqUpRQLHqVgJvODAKI9W6kc+/d68nRgmJUn/TYYSrYtXOV5tj80wnYZia8rnaq5Arpnqpfgdg2+x/JR5yCVAi+by2+P38p2JhaIkzS8v+5mzfmE9zCoQkvW18HbwUN4QDiScONeJX1nFXGrFF/n7G1fYUdIXXBDbQp6OMtvBWnjACKbiSJ7y1otWgA//ULixJp+ccoLd5ZbLQTgtq5qoTnCSj/fgtE8yfR0MHRgtHOXTnUN47uVt/gfUG3OAn5s3j/Lmq4yhHk7/0rv1YSbYvGRML7s980Z0BdYXbSi37j2G9FH48aVmKeyqn7naT90J6s0hQlJTDpt/6YEhvR+m2juZQzL+bnhbFelmIdLaxbSVA6AzRNF2cfVYeyn4rFCDXXSXeOjiXGnyo5rhndKxSO3RlfKHSNYt8e5rW+IK3e6qREoEuH5slMDNjWTLkiaVsFMQHmvk9SHWjDSivGxJ/AXGmQfKKWTJIQoEnGndBCgV7FgfbtE1hW66FDiSA3giJxLIeEylMwBq6Yj8+GGkIqsdLw7iXjjT77kuAAyySO0rQjHg0bmjz04p/9L0HVhAxEDeEPqzQD6BOnCOvFTQIwiBe9dSrjJwbaVcdKxzMknDVkKGnVpIpo9rrTG6Vk24V1QCyDxotoiEUaJMxksjHdRG58yi2JLCH9qBD9fdnxkwQ+IEnyAp9RuVLBXI6J1RKLCr7ux8wplXBpBDSuxCUX7mjbjRfJzkYxTRgGQAOjQkIDweanUS6elGPKN/LIATjg9xiWtMykZzrLdlT+CW7oFnoXxDyX+DfH/Kgjzn++9IfR3OD1v67Quj3TJx/uIm0THMenRKcV/P2GUI97rET+yg7Zp18UHywiLUWdyGe6PWG0Ex2t9FKud2bEUYG3zn0ls64ZQB52zP4LX7Zhc1VRGikZn6MX1NjBoL9CC04x97an80uVWqU3yi2kjHdVFSC5bYhSI+qXIGWkxGriBncbPckexAoTwmje2pwMWMqFozCSyUdQuoHz4Ju+3bXMog8pjtqYR96jumHUqJC3e8Y120bocs9GH9m86HUzE5zcP/sJMVt7A9qlRl25wDCK4YrO4z4Cq/vBMqey/wY3pPb13Vw/PfX1y4tSbGHa5+LjGL66rqcy4QZoaxwO7Xfthv4m8hbIYQxafgLFE+b2Xi9NR3xKbIEufUYC96XhwMLf+meliwm7FbLgNMgPpmlYl0lBzFrAVk3KZwovqDgWOrmQufMFpBmnL1NJqywzVqN2P293U2zypqzbFpGb+veFiySP04IaERDhr6OonRpOFU8yffnBOJwLJW8awlNraYQ5/03qbTC6pUMqNK2JPq/lI2wldhY0YCFagDFGGV2Ip2Vdh46tDEjgOVB+wMInUeNCQLOyIxtOq8pDyL9i+i/9Mia7/Ip1R0kHvcUZaV9fhzcBaRjWS5cATtRrCEgKoxtPrjtK3yMsLgTa2A6npKlX63fQ25GHhytwLxXUGO5n9jmXC0nkD0+xaOujmhV9EoCcNL+/UvN5yOwuDIKOlbaKPYxoZCM/OEajXoDERtpsLHQ9EItEQdK8jZLmJpmaPOz4JNF33ek5O41SARUp2KuzDABK8ulYD0wZ7o0h/SKIpjg8eTn+8YNjd5I9GJzumbM0JIcqk1MwTZCjvTRqzE/1wbNsH+DQRW4lQru4P6qqEksoVZQhlF4k7aVozvMAiCvK6pPpKuUQusf4vTmp4smVEYaJH3gt0fRCiEv61/VhuI4lf2v1/ZQIaGDPcWfoc6gcJe1BWg=="},USER="medmost",ITER=250000;
const b=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
async function key(p,salt){const m=await crypto.subtle.importKey("raw",new TextEncoder().encode(p),"PBKDF2",false,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:b(salt),iterations:ITER,hash:"SHA-256"},m,{name:"AES-GCM",length:256},false,["decrypt"])}
async function open_(p){const k=await key(p,P.s);const pt=await crypto.subtle.decrypt({name:"AES-GCM",iv:b(P.i)},k,b(P.d));return new TextDecoder().decode(pt)}
function show(t){var d=new DOMParser().parseFromString(t,"text/html");
d.querySelectorAll("style").forEach(function(st){var n=document.createElement("style");n.textContent=st.textContent;document.head.appendChild(n)});
d.querySelectorAll('link[rel="stylesheet"]').forEach(function(l){var n=document.createElement("link");n.rel="stylesheet";n.href=l.href;document.head.appendChild(n)});
var holder=document.getElementById("stats-out");
if(!holder){holder=document.createElement("div");holder.id="stats-out";document.querySelector(".wrap").appendChild(holder)}
holder.innerHTML=d.body.innerHTML;
d.body.querySelectorAll("script").forEach(function(s){var n=document.createElement("script");if(s.src)n.src=s.src;else n.textContent=s.textContent;document.body.appendChild(n)});
var lb=document.querySelector(".box");if(lb)lb.style.display="none";window.scrollTo(0,holder.offsetTop)}
const stored=sessionStorage.getItem("kwm_pw");
if(stored){document.getElementById("s").style.display="block";open_(stored).then(t=>show(t)).catch(()=>{sessionStorage.removeItem("kwm_pw");document.getElementById("s").style.display="none"})}
document.getElementById("f").addEventListener("submit",async ev=>{ev.preventDefault();
if(document.getElementById("u").value.trim()!==USER){document.getElementById("e").style.display="block";return}
document.getElementById("e").style.display="none";document.getElementById("s").style.display="block";
const p=document.getElementById("p").value;
try{const t=await open_(p);sessionStorage.setItem("kwm_pw",p);show(t)}
catch(e){document.getElementById("s").style.display="none";document.getElementById("e").style.display="block"}});
