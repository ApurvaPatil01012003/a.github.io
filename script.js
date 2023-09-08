const a=["Murad ek larki ko dekh ke bola:-Lafz tere geet mere! Gazal koi suna du kya?,Murad se Larki:- Haath mere gaal tere! Kaan ke neeche bajaun kya? …",
"Rohan & Mohan were sitting in a kabristan & were talking.,Rohan:- Mohan, dekho yeh murde kitne aaraam se apni kabron mein sote hai.,Sare murde uth khare hue aur bole:- Kyun na soye, yeh jaga apni jaan de ke hasil kee hai..!","Bap:Oxygen is must for Breathing . It was discovered in 1773.,Beta:-Thank God I was born after that .Pehle Paida hota to mar hi jata .","Pappu:- yar mere pas paise nhi hy mujhe kapre lena hen kya karun?,Dost:- To bank se loan le loPappu:- Loan to le lun magar hmko sirf cotton pehanne ki adat hai","Ek Bap beti se kaha:- Pehle to tum mujhko papa kahte the ab dady kuyn kahte hoo, Kiya wajah hia ?,Beti Bap se kaha:- Papa kehne se mera lipstick jo kharab hoo jati hai!","Sabu ek party mein gaya aur waha usne 10 butter naan kha liye.Kuch der bad toilet mein pet pakar ke ro raha tha or bhagwan se request kar raha ki,“He Bhagwan ya toh jaan nikal de ya naan nikal de!","Pappu bada dukhi tha!Ek dost ne uss se poocha, “Kyu, tension mein ho?”,Pappu: Yaar ek dost ko plastic surgery ke liye 3 lakh rupeey diye thay, ab sale ko peehchan nahi pa raha hoon!","HAR JAGA TUM HO, ASMAN ME TUM HO, ZAMIN PE TUM HO,HAWA ME TUM HO,JAHA BHI DEKHO TUM HI TUM HO.PANTI WALI AUNTY SAHI KEHTI HAI KITAANU HAR JAGAH HOTE HAI....."]

function getrandomejoke(){
let x=Math.floor(Math.random()*a.length);
  return a[x];
}

document.getElementById("btn").addEventListener("click",function(){
  const jokeDisplay=document.getElementById("circle")
  const randomjoke=getrandomejoke();
  jokeDisplay.textContent=randomjoke;
})
         
