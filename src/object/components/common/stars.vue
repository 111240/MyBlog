<template>
  <div>
    <div class="container">
      <div class="earth">
        <div class="countries"></div>
        <div class="countries"></div>
        <div class="countries"></div>
        <div class="countries"></div>
        <div class="countries"></div>
        <div class="countries"></div>
        <div class="countries"></div>
        <div class="eyes">
          <div class="eyes opened"></div>
          <div class="eyes closed"></div>
        </div>
        <div class="tear"></div>
      </div>
      <div class="excited">!</div>
      <div class="shadow"></div>
      <div class="moon">
        <div class="craters"></div>
        <div class="craters"></div>
        <div class="craters"></div>
        <div class="craters"></div>
        <div class="craters"></div>
        <div class="eyes"></div>
      </div>
      <div class="sun">
        <div class="left-eye">
          <div class="left-eyelash"></div>
        </div>
        <div class="right-eye">
          <div class="right-eyelash"></div>
        </div>
        <div class="rays">
          <div class="beam"></div>
          <div class="beam"></div>
          <div class="beam"></div>
          <div class="beam"></div>
          <div class="beam"></div>
          <div class="beam"></div>
          <div class="beam"></div>
          <div class="beam"></div>
          <div class="beam"></div>
          <div class="beam"></div>
        </div>
      </div>
      <div class="stars1"></div>
      <div class="stars2"></div>
      <div class="stars3"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Stars'
}
</script>
<style lang="scss" scoped>
body {
  background: #21223a;
}

.container {
  position: fixed;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
}

.sun {
  width: 150px;
  height: 150px;
  background: #fffaa9;
  border-radius: 100%;
  box-shadow: 0 0 60px #ffcfa9, 0 0 100px #b9a018;
  position: relative;
  left: 250px;
}
.sun .left-eye, .sun .left-eye::after {
  position: relative;
  border-top-right-radius: 90px;
  border-top-left-radius: 90px;
  background: #ffcfa9;
  width: 25px;
  height: 12.5px;
  transform: scale(1.5);
  top: 60px;
  left: 30px;
  animation: sun-lefteye 2.3s ease-in-out infinite;
}
.sun .left-eye::after {
  content: "";
  position: absolute;
  background: #fffaa9;
  left: 0px;
  top: 3px;
  transform: scale(0.9);
  animation: sun-eye-smol 2.3s ease-in-out infinite;
}
.sun .right-eye, .sun .right-eye::after {
  position: absolute;
  border-top-right-radius: 90px;
  border-top-left-radius: 90px;
  background: #ffcfa9;
  width: 25px;
  height: 12.5px;
  transform: scale(1.5);
  top: 60px;
  left: 90px;
  animation: sun-righteye 2.3s ease-in-out infinite;
}
.sun .right-eye::after {
  content: "";
  position: absolute;
  background: #fffaa9;
  left: 0px;
  top: 3px;
  transform: scale(0.9);
  animation: sun-eye-smol 2.3s ease-in-out infinite;
}

.left-eyelash, .left-eyelash::after, .right-eyelash::after,
.right-eyelash {
  position: relative;
  width: 2.5px;
  height: 8px;
  background: #ffcfa9;
  border-radius: 200px;
}

.left-eyelash, .left-eyelash::after, .right-eyelash::after {
  top: 2px;
  transform: rotate(-45deg);
}
.left-eyelash::after, .right-eyelash::after {
  content: "";
  position: absolute;
  top: -1px;
  left: 3px;
  transform: rotate(5deg);
}

.right-eyelash {
  top: -1px;
  left: 21px;
  transform: rotate(45deg);
}
.right-eyelash::after {
  content: "";
  position: absolute;
  top: 1px;
  left: 3px;
}

.rays {
  position: absolute;
  transform-origin: center;
  margin: auto;
  width: 150px;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: spin 120s linear infinite;
}

.beam {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0), #ffcfa9 40%, #ffcfa9);
  margin-left: 10px;
  border-radius: 50% 50% 0 0;
  position: absolute;
  opacity: 0.03;
  height: 110px;
}
.beam:nth-child(1) {
  width: 40px;
  transform: rotate(180deg);
  top: -90px;
  left: 42px;
}
.beam:nth-child(2) {
  width: 30px;
  transform: rotate(210deg);
  right: -5px;
  top: -80px;
}
.beam:nth-child(3) {
  width: 50px;
  transform: rotate(255deg);
  top: -20px;
  right: -65px;
}
.beam:nth-child(4) {
  width: 24px;
  transform: rotate(300deg);
  top: 60px;
  left: 150px;
}
.beam:nth-child(5) {
  width: 40px;
  top: 135px;
  left: 40px;
}
.beam:nth-child(6) {
  width: 30px;
  transform: rotate(-35deg);
  top: 115px;
  right: -12px;
}
.beam:nth-child(7) {
  width: 45px;
  transform: rotate(45deg);
  top: 100px;
  left: -45px;
}
.beam:nth-child(8) {
  width: 20px;
  transform: rotate(75deg);
  top: 40px;
  left: -70px;
}
.beam:nth-child(9) {
  width: 50px;
  transform: rotate(-250deg);
  top: -30px;
  left: -70px;
}
.beam:nth-child(10) {
  width: 20px;
  transform: rotate(145deg);
  top: -80px;
  left: -15px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes sun-lefteye {
  50% {
    left: 40px;
  }
}
@keyframes sun-eye-smol {
  50% {
    left: 0px;
  }
}
@keyframes sun-righteye {
  50% {
    left: 100px;
  }
}
.moon {
  width: 80px;
  height: 80px;
  background: #e3e7ea;
  border-radius: 100%;
  position: absolute;
  top: 110px;
  right: 130px;
  transform-origin: 200px center;
  overflow: hidden;
  transform: rotate(-20deg);
  animation: moonOrbit 5s infinite 0.3s;
}
.moon::after {
  content: "";
  width: 80px;
  height: 80px;
  background: transparent;
  border-radius: 100%;
  position: absolute;
  box-shadow: inset 15px -3px 0px #637684;
  z-index: 3;
  opacity: 0.2;
}
.moon .craters {
  position: absolute;
  animation: moonScroll 5s linear infinite 0.3s;
}
.moon .craters:nth-child(1) {
  width: 40px;
  height: 40px;
  background: #ccd3d9;
  border-radius: 100%;
}
.moon .craters:nth-child(2) {
  width: 10px;
  height: 10px;
  background: #ccd3d9;
  border-radius: 100%;
  left: 40px;
  top: 35px;
}
.moon .craters:nth-child(3) {
  width: 40px;
  height: 40px;
  background: #ccd3d9;
  border-radius: 100%;
  left: 60px;
}
.moon .craters:nth-child(4) {
  width: 20px;
  height: 20px;
  background: #ccd3d9;
  border-radius: 100%;
  top: 45px;
}
.moon .craters:nth-child(5) {
  width: 30px;
  height: 30px;
  background: #ccd3d9;
  border-radius: 100%;
  top: 55px;
  left: 30px;
}
.moon .eyes {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 35px;
  transform: translateX(-50);
}
.moon .eyes::before, .moon .eyes::after {
  display: block;
  content: "";
  position: relative;
  width: 20px;
  height: 5px;
  right: 25%;
  border-radius: 200px;
  background: #637684;
  margin: 0 3px;
  animation: blink 3.5s infinite;
}
.moon .eyes::before {
  transform: rotate(30deg);
}
.moon .eyes::after {
  transform: rotate(-30deg);
}

@keyframes moonOrbit {
  20%,
  25% {
    transform: rotate(50deg);
  }
  55%,
  60% {
    transform: rotate(-20deg);
  }
}
@keyframes blink {
  0% {
    top: 0px;
    height: 5px;
  }
  18% {
    top: 0px;
    height: 5px;
  }
  20% {
    top: 3px;
    height: 2px;
  }
  25% {
    top: 0px;
    height: 5px;
  }
  38% {
    top: 0px;
    height: 5px;
  }
  40% {
    top: 3px;
    height: 2px;
  }
  45% {
    top: 0px;
    height: 5px;
  }
  80% {
    top: 0px;
    height: 5px;
  }
  100% {
    top: 0px;
    height: 5px;
  }
}
.earth {
  position: absolute;
  display: block;
  right: 300px;
  top: 100px;
  width: 120px;
  height: 120px;
  background: #6fd4dd;
  border-radius: 100%;
  transform: rotate(-20deg);
  transform-origin: 400px center;
  overflow: hidden;
  animation: earthOrbit 5s infinite;
  z-index: 3;
}
.earth::after {
  content: "";
  width: 120px;
  height: 120px;
  background: transparent;
  border-radius: 100%;
  position: absolute;
  box-shadow: inset 10px 1px 0px #1d747c;
  z-index: 3;
  opacity: 0.2;
}

@keyframes earthOrbit {
  20%,
  25% {
    transform: rotate(50deg);
  }
  55%,
  60% {
    transform: rotate(-20deg);
  }
}
.countries {
  position: absolute;
  z-index: 1;
  animation: scroll 5s linear alternate infinite;
}
.countries:nth-child(1) {
  width: 40px;
  height: 40px;
  background: #62e5aa;
  border-radius: 100%;
  left: 5px;
  top: 20px;
}
.countries:nth-child(2) {
  width: 50px;
  height: 50px;
  background: #62e5aa;
  border-radius: 100%;
  left: 25px;
  top: 45px;
}
.countries:nth-child(3) {
  width: 35px;
  height: 35px;
  background: #62e5aa;
  border-radius: 100%;
  left: 60px;
  top: 20px;
}
.countries:nth-child(4) {
  width: 55px;
  height: 55px;
  background: #62e5aa;
  border-radius: 100%;
  left: 90px;
  top: 50px;
}
.countries:nth-child(5) {
  width: 60px;
  height: 60px;
  background: #62e5aa;
  border-radius: 100%;
  left: 75px;
}
.countries:nth-child(6) {
  width: 50px;
  height: 50px;
  background: #62e5aa;
  border-radius: 100%;
  top: 110px;
  left: 35px;
}
.countries:nth-child(7) {
  width: 30px;
  height: 30px;
  background: #62e5aa;
  border-radius: 100%;
  top: 20px;
  left: -50px;
}

.eyes {
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 3;
  top: 15px;
  left: 25%;
}
.eyes .opened::before,
.eyes .opened::after {
  display: block;
  content: "\2665";
  color: #f55020;
  font-size: 40px;
  margin: 0 8px;
  animation: openBlink 5s linear infinite;
}
.eyes .closed::before,
.eyes .closed::after {
  display: block;
  content: "";
  background: transparent;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 5px 5px 0 0 #1d747c;
  margin: 8px 8px;
  transform: rotate(45deg);
  opacity: 0;
  animation: closedEyes 5s linear infinite;
}

.tear {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 0 50% 50% 50%;
  background: #54acb7;
  top: 65px;
  z-index: 3;
  left: 35px;
  opacity: 0;
  transform: rotate(60deg);
  animation: crying 5s infinite 3s;
}

@keyframes crying {
  from {
    opacity: 1;
    transform: translateY(0px) rotate(60deg);
  }
  to {
    opacity: 0;
    transform: translateY(50px);
  }
}
@keyframes openBlink {
  0% {
    transform: scaleY(1);
  }
  18% {
    transform: scaleY(1);
  }
  20% {
    transform: scaleY(0);
  }
  25% {
    transform: scaleY(1);
  }
  38% {
    transform: scaleY(1);
  }
  40% {
    transform: scaleY(0);
  }
  45% {
    transform: scaleY(1);
  }
  48% {
    transform: scaleY(0), scaleX(0);
    opacity: 1;
  }
  50% {
    margin-top: 8px;
    opacity: 0;
  }
  72% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes closedEyes {
  45% {
    opacity: 0;
    margin-top: 8px;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    margin-top: 15px;
  }
}
.shadow {
  width: 100px;
  height: 100px;
  background: #21223a;
  border-radius: 100%;
  z-index: 2;
  position: absolute;
  opacity: 0.2;
  right: 270px;
  top: 210px;
  transform-origin: 650px center;
  animation: shadowOrbit 5s infinite 0.3s;
}

@keyframes shadowOrbit {
  20%,
  25% {
    transform: rotate(35deg);
  }
  55%,
  60% {
    transform: rotate(0deg);
  }
}
@keyframes scroll {
  50% {
    transform: translateX(-90px);
  }
}
@keyframes moonScroll {
  50% {
    transform: translateX(-40px);
  }
}
.excited {
  position: absolute;
  font-weight: bold;
  font-family: Arial;
  z-index: -1;
  color: white;
  top: 200px;
  right: 400px;
  font-size: 0px;
  transform: rotate(-30deg);
  animation: excited 5s infinite 4.5s;
}

@keyframes excited {
  0% {
    font-size: 0px;
  }
  2% {
    font-size: 25px;
  }
  10% {
    opacity: 1;
    font-size: 25px;
  }
  20% {
    opacity: 0;
    font-size: 25px;
  }
  100% {
    opacity: 0;
    font-size: 0px;
  }
}
@keyframes star-animation {
  0% {
    transform: rotate(-20deg) translateX(-1000px);
  }
  100% {
    transform: rotate(-20deg) translateX(1000px);
  }
}
.stars1 {
  z-index: -1;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: 402vh 711vh #FFF , 683vh 277vh #FFF , 327vh 113vh #FFF , 660vh 677vh #FFF , 756vh 617vh #FFF , 343vh 131vh #FFF , 284vh 815vh #FFF , 537vh 776vh #FFF , 452vh 582vh #FFF , 916vh 116vh #FFF , 103vh 43vh #FFF , 54vh 57vh #FFF , 492vh 705vh #FFF , 82vh 144vh #FFF , 248vh 844vh #FFF , 618vh 152vh #FFF , 648vh 488vh #FFF , 431vh 222vh #FFF , 635vh 307vh #FFF , 397vh 586vh #FFF , 340vh 557vh #FFF , 291vh 370vh #FFF , 7vh 391vh #FFF , 539vh 785vh #FFF , 214vh 1vh #FFF , 57vh 407vh #FFF , 705vh 505vh #FFF , 685vh 898vh #FFF , 179vh 559vh #FFF , 144vh 263vh #FFF , 719vh 137vh #FFF , 359vh 678vh #FFF , 746vh 820vh #FFF , 754vh 265vh #FFF , 24vh 491vh #FFF , 946vh 792vh #FFF , 762vh 547vh #FFF , 121vh 556vh #FFF , 613vh 506vh #FFF , 204vh 601vh #FFF , 183vh 244vh #FFF , 23vh 372vh #FFF , 696vh 383vh #FFF , 741vh 265vh #FFF , 217vh 416vh #FFF , 649vh 634vh #FFF , 612vh 435vh #FFF , 887vh 481vh #FFF , 325vh 281vh #FFF , 202vh 329vh #FFF , 619vh 201vh #FFF , 410vh 775vh #FFF , 395vh 571vh #FFF , 559vh 473vh #FFF , 616vh 88vh #FFF , 232vh 835vh #FFF , 162vh 125vh #FFF , 153vh 843vh #FFF , 701vh 898vh #FFF , 255vh 575vh #FFF , 462vh 454vh #FFF , 258vh 599vh #FFF , 625vh 613vh #FFF , 669vh 792vh #FFF , 28vh 167vh #FFF , 5vh 563vh #FFF , 868vh 64vh #FFF , 858vh 65vh #FFF , 301vh 888vh #FFF , 97vh 175vh #FFF , 375vh 613vh #FFF , 42vh 422vh #FFF , 494vh 219vh #FFF , 585vh 229vh #FFF , 931vh 379vh #FFF , 220vh 628vh #FFF , 796vh 587vh #FFF , 852vh 681vh #FFF , 771vh 211vh #FFF , 378vh 472vh #FFF , 761vh 634vh #FFF , 686vh 135vh #FFF , 289vh 159vh #FFF , 338vh 824vh #FFF , 370vh 176vh #FFF , 157vh 803vh #FFF , 706vh 532vh #FFF , 385vh 393vh #FFF , 288vh 570vh #FFF , 754vh 458vh #FFF , 831vh 227vh #FFF , 342vh 720vh #FFF , 835vh 451vh #FFF , 113vh 298vh #FFF , 28vh 419vh #FFF , 51vh 79vh #FFF , 355vh 821vh #FFF , 575vh 704vh #FFF , 247vh 566vh #FFF , 590vh 219vh #FFF , 320vh 337vh #FFF , 268vh 474vh #FFF , 423vh 328vh #FFF , 128vh 16vh #FFF , 21vh 563vh #FFF , 415vh 567vh #FFF , 410vh 349vh #FFF , 948vh 524vh #FFF , 41vh 583vh #FFF , 225vh 755vh #FFF , 490vh 324vh #FFF , 501vh 121vh #FFF , 723vh 242vh #FFF , 705vh 208vh #FFF , 92vh 228vh #FFF , 447vh 305vh #FFF , 953vh 702vh #FFF , 295vh 56vh #FFF , 608vh 823vh #FFF , 520vh 49vh #FFF , 890vh 454vh #FFF , 915vh 614vh #FFF , 868vh 776vh #FFF , 239vh 277vh #FFF , 380vh 632vh #FFF , 607vh 449vh #FFF , 456vh 717vh #FFF , 704vh 167vh #FFF , 540vh 614vh #FFF , 161vh 350vh #FFF , 590vh 264vh #FFF , 324vh 538vh #FFF , 385vh 418vh #FFF , 882vh 859vh #FFF , 82vh 292vh #FFF , 160vh 501vh #FFF , 723vh 422vh #FFF , 991vh 628vh #FFF , 767vh 27vh #FFF , 654vh 344vh #FFF , 167vh 414vh #FFF , 538vh 449vh #FFF , 705vh 715vh #FFF , 418vh 154vh #FFF , 810vh 84vh #FFF , 4vh 465vh #FFF , 872vh 750vh #FFF , 462vh 558vh #FFF , 109vh 271vh #FFF , 668vh 359vh #FFF , 319vh 3vh #FFF , 628vh 129vh #FFF , 997vh 881vh #FFF , 525vh 478vh #FFF , 748vh 278vh #FFF , 689vh 327vh #FFF , 151vh 825vh #FFF , 844vh 811vh #FFF , 84vh 730vh #FFF , 186vh 227vh #FFF , 531vh 678vh #FFF , 812vh 170vh #FFF , 59vh 476vh #FFF , 120vh 276vh #FFF , 318vh 717vh #FFF , 71vh 436vh #FFF , 53vh 204vh #FFF , 459vh 591vh #FFF , 120vh 458vh #FFF , 164vh 785vh #FFF , 543vh 529vh #FFF , 343vh 521vh #FFF , 860vh 177vh #FFF , 430vh 900vh #FFF , 684vh 303vh #FFF , 683vh 816vh #FFF , 685vh 845vh #FFF , 171vh 717vh #FFF , 602vh 12vh #FFF , 669vh 746vh #FFF , 133vh 874vh #FFF , 930vh 447vh #FFF , 917vh 702vh #FFF , 599vh 221vh #FFF , 471vh 328vh #FFF , 396vh 605vh #FFF , 536vh 717vh #FFF , 824vh 467vh #FFF , 646vh 549vh #FFF , 938vh 613vh #FFF , 759vh 10vh #FFF , 402vh 805vh #FFF , 218vh 397vh #FFF , 889vh 92vh #FFF , 16vh 316vh #FFF , 844vh 237vh #FFF , 536vh 35vh #FFF , 425vh 160vh #FFF , 333vh 812vh #FFF , 323vh 406vh #FFF , 863vh 81vh #FFF , 135vh 750vh #FFF , 233vh 444vh #FFF , 758vh 805vh #FFF , 450vh 183vh #FFF , 846vh 45vh #FFF , 515vh 114vh #FFF , 809vh 539vh #FFF , 932vh 698vh #FFF , 815vh 84vh #FFF , 4vh 507vh #FFF , 68vh 365vh #FFF , 350vh 411vh #FFF , 120vh 326vh #FFF , 330vh 128vh #FFF , 961vh 587vh #FFF , 13vh 535vh #FFF , 654vh 134vh #FFF , 834vh 845vh #FFF , 87vh 390vh #FFF , 219vh 563vh #FFF , 859vh 702vh #FFF , 690vh 573vh #FFF , 954vh 81vh #FFF , 563vh 856vh #FFF , 66vh 733vh #FFF , 207vh 286vh #FFF , 879vh 871vh #FFF , 110vh 179vh #FFF , 750vh 737vh #FFF , 156vh 86vh #FFF , 422vh 831vh #FFF , 650vh 296vh #FFF , 671vh 313vh #FFF , 110vh 551vh #FFF , 899vh 827vh #FFF , 995vh 164vh #FFF , 492vh 146vh #FFF , 427vh 523vh #FFF , 824vh 293vh #FFF , 474vh 110vh #FFF , 101vh 422vh #FFF , 984vh 648vh #FFF , 962vh 504vh #FFF , 383vh 754vh #FFF , 477vh 450vh #FFF , 316vh 670vh #FFF , 453vh 272vh #FFF , 876vh 635vh #FFF , 415vh 373vh #FFF , 655vh 652vh #FFF , 351vh 92vh #FFF , 211vh 737vh #FFF , 231vh 442vh #FFF , 730vh 805vh #FFF , 713vh 284vh #FFF , 102vh 780vh #FFF , 41vh 723vh #FFF , 249vh 8vh #FFF , 821vh 279vh #FFF , 732vh 393vh #FFF , 707vh 320vh #FFF , 909vh 817vh #FFF , 357vh 800vh #FFF , 12vh 234vh #FFF , 882vh 5vh #FFF , 384vh 620vh #FFF , 232vh 378vh #FFF , 713vh 68vh #FFF , 137vh 800vh #FFF , 804vh 143vh #FFF , 822vh 340vh #FFF , 444vh 377vh #FFF , 915vh 372vh #FFF , 153vh 670vh #FFF , 894vh 626vh #FFF , 603vh 21vh #FFF , 593vh 778vh #FFF , 319vh 712vh #FFF , 639vh 424vh #FFF , 148vh 751vh #FFF , 438vh 188vh #FFF , 532vh 353vh #FFF , 509vh 483vh #FFF , 273vh 409vh #FFF , 630vh 284vh #FFF , 582vh 172vh #FFF , 637vh 407vh #FFF , 788vh 379vh #FFF , 355vh 75vh #FFF , 371vh 228vh #FFF , 765vh 782vh #FFF , 94vh 102vh #FFF , 292vh 37vh #FFF , 267vh 705vh #FFF , 677vh 800vh #FFF , 739vh 300vh #FFF , 554vh 355vh #FFF , 972vh 14vh #FFF , 975vh 260vh #FFF , 205vh 795vh #FFF , 372vh 280vh #FFF , 673vh 768vh #FFF , 597vh 111vh #FFF , 962vh 864vh #FFF , 562vh 265vh #FFF , 131vh 301vh #FFF , 590vh 657vh #FFF , 901vh 177vh #FFF , 849vh 747vh #FFF , 876vh 652vh #FFF , 312vh 204vh #FFF , 785vh 354vh #FFF , 484vh 889vh #FFF , 146vh 181vh #FFF , 889vh 440vh #FFF , 888vh 270vh #FFF , 138vh 65vh #FFF , 20vh 555vh #FFF , 144vh 182vh #FFF , 2vh 436vh #FFF , 190vh 532vh #FFF , 657vh 473vh #FFF , 782vh 841vh #FFF , 446vh 111vh #FFF , 39vh 467vh #FFF , 395vh 164vh #FFF , 984vh 328vh #FFF , 110vh 24vh #FFF , 719vh 637vh #FFF , 168vh 74vh #FFF , 255vh 749vh #FFF , 821vh 35vh #FFF , 951vh 578vh #FFF , 100vh 184vh #FFF , 247vh 657vh #FFF , 246vh 810vh #FFF , 59vh 5vh #FFF , 226vh 316vh #FFF , 692vh 374vh #FFF , 361vh 157vh #FFF , 582vh 599vh #FFF , 295vh 102vh #FFF , 816vh 120vh #FFF , 769vh 451vh #FFF , 453vh 81vh #FFF , 27vh 591vh #FFF , 545vh 214vh #FFF , 621vh 319vh #FFF , 833vh 254vh #FFF , 485vh 188vh #FFF , 451vh 690vh #FFF , 83vh 59vh #FFF , 782vh 141vh #FFF , 96vh 776vh #FFF , 423vh 473vh #FFF , 273vh 56vh #FFF , 681vh 99vh #FFF , 537vh 528vh #FFF , 414vh 499vh #FFF , 471vh 821vh #FFF , 192vh 418vh #FFF , 317vh 130vh #FFF , 238vh 586vh #FFF , 823vh 211vh #FFF , 988vh 658vh #FFF , 802vh 320vh #FFF , 300vh 179vh #FFF , 680vh 737vh #FFF , 793vh 567vh #FFF , 602vh 44vh #FFF , 543vh 893vh #FFF , 114vh 863vh #FFF , 31vh 73vh #FFF , 772vh 803vh #FFF , 508vh 187vh #FFF , 447vh 755vh #FFF , 879vh 856vh #FFF , 564vh 316vh #FFF , 511vh 647vh #FFF , 49vh 241vh #FFF , 495vh 124vh #FFF , 602vh 637vh #FFF , 432vh 487vh #FFF , 248vh 873vh #FFF , 413vh 838vh #FFF , 187vh 354vh #FFF , 60vh 44vh #FFF , 719vh 184vh #FFF , 731vh 326vh #FFF , 651vh 884vh #FFF , 370vh 157vh #FFF , 337vh 9vh #FFF , 719vh 671vh #FFF , 992vh 867vh #FFF , 309vh 875vh #FFF , 664vh 406vh #FFF , 616vh 394vh #FFF , 578vh 494vh #FFF , 728vh 316vh #FFF;
  animation: star-animation 100s linear infinite;
}
.stars1:after {
  content: " ";
  top: -900px;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  position: absolute;
  box-shadow: 405vh 295vh #FFF , 4vh 630vh #FFF , 315vh 630vh #FFF , 139vh 67vh #FFF , 486vh 85vh #FFF , 338vh 103vh #FFF , 375vh 366vh #FFF , 268vh 307vh #FFF , 113vh 359vh #FFF , 234vh 397vh #FFF , 422vh 560vh #FFF , 485vh 254vh #FFF , 138vh 14vh #FFF , 229vh 76vh #FFF , 469vh 495vh #FFF , 61vh 86vh #FFF , 205vh 76vh #FFF , 445vh 163vh #FFF , 54vh 716vh #FFF , 256vh 599vh #FFF , 350vh 596vh #FFF , 25vh 344vh #FFF , 188vh 650vh #FFF , 363vh 489vh #FFF , 167vh 800vh #FFF , 228vh 667vh #FFF , 4vh 117vh #FFF , 288vh 287vh #FFF , 304vh 172vh #FFF , 421vh 697vh #FFF , 467vh 474vh #FFF , 389vh 636vh #FFF , 254vh 169vh #FFF , 117vh 327vh #FFF , 464vh 373vh #FFF , 128vh 114vh #FFF , 349vh 628vh #FFF , 79vh 366vh #FFF , 282vh 160vh #FFF , 410vh 192vh #FFF , 243vh 550vh #FFF , 233vh 461vh #FFF , 310vh 431vh #FFF , 450vh 475vh #FFF , 219vh 421vh #FFF , 141vh 572vh #FFF , 305vh 677vh #FFF , 21vh 373vh #FFF , 278vh 26vh #FFF , 17vh 635vh #FFF , 367vh 472vh #FFF , 212vh 141vh #FFF , 452vh 18vh #FFF , 497vh 49vh #FFF , 414vh 553vh #FFF , 122vh 158vh #FFF , 142vh 253vh #FFF , 481vh 121vh #FFF , 326vh 693vh #FFF , 323vh 543vh #FFF , 483vh 553vh #FFF , 42vh 317vh #FFF , 345vh 259vh #FFF , 47vh 302vh #FFF , 29vh 619vh #FFF , 135vh 482vh #FFF , 470vh 171vh #FFF , 355vh 652vh #FFF , 374vh 298vh #FFF , 61vh 336vh #FFF , 145vh 72vh #FFF , 289vh 10vh #FFF , 330vh 203vh #FFF , 8vh 251vh #FFF , 18vh 611vh #FFF , 122vh 654vh #FFF , 237vh 786vh #FFF , 336vh 22vh #FFF , 54vh 60vh #FFF , 201vh 69vh #FFF , 176vh 625vh #FFF , 360vh 502vh #FFF , 374vh 187vh #FFF , 485vh 389vh #FFF , 468vh 492vh #FFF , 399vh 659vh #FFF , 354vh 563vh #FFF , 287vh 295vh #FFF , 461vh 246vh #FFF , 203vh 190vh #FFF , 220vh 698vh #FFF , 108vh 227vh #FFF , 88vh 530vh #FFF , 363vh 457vh #FFF , 486vh 15vh #FFF , 59vh 361vh #FFF , 429vh 267vh #FFF , 33vh 65vh #FFF , 245vh 31vh #FFF , 303vh 213vh #FFF , 281vh 320vh #FFF , 3vh 182vh #FFF , 434vh 87vh #FFF , 39vh 355vh #FFF , 66vh 287vh #FFF , 345vh 597vh #FFF , 170vh 638vh #FFF , 457vh 92vh #FFF , 181vh 382vh #FFF , 69vh 720vh #FFF , 160vh 24vh #FFF , 108vh 403vh #FFF , 469vh 622vh #FFF , 129vh 626vh #FFF , 357vh 372vh #FFF , 473vh 17vh #FFF , 496vh 8vh #FFF , 215vh 629vh #FFF , 322vh 703vh #FFF , 185vh 466vh #FFF , 217vh 100vh #FFF , 174vh 583vh #FFF , 353vh 219vh #FFF , 328vh 426vh #FFF , 176vh 376vh #FFF , 347vh 494vh #FFF , 428vh 666vh #FFF , 269vh 445vh #FFF , 38vh 466vh #FFF , 291vh 293vh #FFF , 481vh 282vh #FFF , 141vh 543vh #FFF , 61vh 251vh #FFF , 359vh 706vh #FFF , 21vh 796vh #FFF , 482vh 287vh #FFF , 432vh 194vh #FFF , 358vh 20vh #FFF , 189vh 417vh #FFF , 278vh 557vh #FFF , 299vh 448vh #FFF , 500vh 55vh #FFF , 306vh 538vh #FFF , 366vh 695vh #FFF , 123vh 134vh #FFF , 174vh 129vh #FFF , 360vh 15vh #FFF , 106vh 566vh #FFF , 357vh 2vh #FFF , 77vh 421vh #FFF , 151vh 541vh #FFF , 186vh 219vh #FFF , 233vh 282vh #FFF , 68vh 157vh #FFF , 73vh 251vh #FFF , 452vh 727vh #FFF , 101vh 425vh #FFF , 202vh 442vh #FFF , 104vh 119vh #FFF , 52vh 248vh #FFF , 351vh 424vh #FFF , 206vh 318vh #FFF , 9vh 584vh #FFF , 85vh 728vh #FFF , 213vh 753vh #FFF , 391vh 721vh #FFF , 447vh 155vh #FFF , 77vh 613vh #FFF , 485vh 28vh #FFF , 144vh 561vh #FFF , 492vh 374vh #FFF , 199vh 444vh #FFF , 164vh 559vh #FFF , 40vh 587vh #FFF , 70vh 178vh #FFF , 77vh 742vh #FFF , 307vh 716vh #FFF , 108vh 200vh #FFF , 174vh 214vh #FFF , 10vh 264vh #FFF , 428vh 799vh #FFF , 417vh 439vh #FFF , 453vh 318vh #FFF , 218vh 577vh #FFF , 474vh 786vh #FFF , 344vh 574vh #FFF , 8vh 752vh #FFF , 444vh 662vh #FFF , 300vh 81vh #FFF , 469vh 237vh #FFF , 243vh 744vh #FFF , 57vh 520vh #FFF , 475vh 545vh #FFF , 490vh 228vh #FFF , 350vh 103vh #FFF , 476vh 499vh #FFF , 284vh 727vh #FFF , 296vh 435vh #FFF , 218vh 770vh #FFF , 292vh 642vh #FFF , 414vh 257vh #FFF , 449vh 356vh #FFF , 82vh 313vh #FFF , 167vh 258vh #FFF , 286vh 562vh #FFF , 334vh 540vh #FFF , 241vh 714vh #FFF , 213vh 144vh #FFF , 293vh 444vh #FFF , 118vh 479vh #FFF , 27vh 625vh #FFF , 51vh 373vh #FFF , 258vh 101vh #FFF , 277vh 611vh #FFF , 265vh 101vh #FFF , 320vh 580vh #FFF , 42vh 53vh #FFF , 349vh 192vh #FFF , 48vh 451vh #FFF , 49vh 226vh #FFF , 96vh 70vh #FFF , 481vh 47vh #FFF , 124vh 256vh #FFF , 497vh 393vh #FFF , 33vh 275vh #FFF , 420vh 713vh #FFF , 437vh 466vh #FFF , 34vh 15vh #FFF , 115vh 301vh #FFF , 324vh 89vh #FFF , 174vh 521vh #FFF , 164vh 4vh #FFF , 241vh 546vh #FFF , 325vh 122vh #FFF , 51vh 547vh #FFF , 432vh 568vh #FFF , 472vh 182vh #FFF , 343vh 534vh #FFF , 460vh 57vh #FFF , 46vh 434vh #FFF , 30vh 386vh #FFF , 246vh 510vh #FFF , 232vh 153vh #FFF , 373vh 662vh #FFF , 2vh 358vh #FFF , 127vh 447vh #FFF , 12vh 791vh #FFF , 295vh 344vh #FFF , 469vh 790vh #FFF , 113vh 360vh #FFF , 351vh 250vh #FFF , 136vh 84vh #FFF , 337vh 503vh #FFF , 325vh 161vh #FFF , 315vh 729vh #FFF , 229vh 128vh #FFF , 39vh 709vh #FFF , 82vh 179vh #FFF , 192vh 773vh #FFF , 94vh 83vh #FFF , 6vh 520vh #FFF , 130vh 75vh #FFF , 279vh 496vh #FFF , 287vh 518vh #FFF , 354vh 31vh #FFF , 365vh 41vh #FFF , 77vh 547vh #FFF , 309vh 355vh #FFF , 69vh 284vh #FFF , 263vh 327vh #FFF , 58vh 196vh #FFF , 482vh 640vh #FFF , 154vh 639vh #FFF , 385vh 445vh #FFF , 190vh 251vh #FFF , 268vh 678vh #FFF , 486vh 417vh #FFF , 113vh 408vh #FFF , 456vh 318vh #FFF , 202vh 651vh #FFF , 298vh 51vh #FFF , 383vh 775vh #FFF , 18vh 567vh #FFF , 453vh 791vh #FFF , 421vh 367vh #FFF , 191vh 736vh #FFF , 110vh 526vh #FFF , 209vh 731vh #FFF , 215vh 174vh #FFF , 416vh 144vh #FFF , 139vh 696vh #FFF , 436vh 734vh #FFF , 376vh 257vh #FFF , 458vh 536vh #FFF , 327vh 718vh #FFF , 148vh 748vh #FFF , 285vh 605vh #FFF , 311vh 234vh #FFF , 470vh 419vh #FFF , 341vh 683vh #FFF , 307vh 722vh #FFF , 232vh 692vh #FFF , 460vh 551vh #FFF , 187vh 572vh #FFF , 428vh 498vh #FFF , 486vh 20vh #FFF , 40vh 40vh #FFF , 80vh 673vh #FFF , 55vh 68vh #FFF , 365vh 364vh #FFF , 123vh 477vh #FFF , 116vh 365vh #FFF , 467vh 359vh #FFF , 198vh 712vh #FFF , 257vh 547vh #FFF , 358vh 254vh #FFF , 127vh 377vh #FFF , 167vh 734vh #FFF , 304vh 97vh #FFF , 442vh 198vh #FFF , 462vh 125vh #FFF , 159vh 553vh #FFF , 216vh 465vh #FFF , 367vh 158vh #FFF , 343vh 692vh #FFF , 79vh 653vh #FFF , 335vh 416vh #FFF , 18vh 470vh #FFF , 188vh 488vh #FFF , 180vh 569vh #FFF , 402vh 720vh #FFF , 191vh 368vh #FFF , 347vh 584vh #FFF , 447vh 684vh #FFF , 149vh 682vh #FFF , 246vh 451vh #FFF , 281vh 380vh #FFF , 493vh 764vh #FFF , 103vh 69vh #FFF , 280vh 698vh #FFF , 36vh 22vh #FFF , 150vh 366vh #FFF , 201vh 753vh #FFF , 212vh 382vh #FFF , 170vh 146vh #FFF , 192vh 724vh #FFF , 122vh 605vh #FFF , 254vh 37vh #FFF , 492vh 110vh #FFF , 47vh 538vh #FFF , 401vh 598vh #FFF , 446vh 450vh #FFF , 249vh 358vh #FFF , 286vh 302vh #FFF , 102vh 369vh #FFF , 380vh 428vh #FFF , 387vh 645vh #FFF , 440vh 4vh #FFF , 289vh 241vh #FFF , 292vh 265vh #FFF , 467vh 669vh #FFF , 72vh 789vh #FFF , 181vh 575vh #FFF , 333vh 689vh #FFF , 352vh 349vh #FFF , 146vh 775vh #FFF , 56vh 585vh #FFF , 212vh 145vh #FFF , 88vh 519vh #FFF , 75vh 703vh #FFF , 44vh 175vh #FFF , 188vh 535vh #FFF , 22vh 238vh #FFF , 365vh 601vh #FFF , 59vh 404vh #FFF , 157vh 315vh #FFF , 404vh 262vh #FFF , 264vh 275vh #FFF , 254vh 655vh #FFF , 21vh 305vh #FFF , 258vh 533vh #FFF , 72vh 615vh #FFF , 334vh 598vh #FFF , 328vh 471vh #FFF , 438vh 6vh #FFF , 110vh 641vh #FFF , 451vh 62vh #FFF , 290vh 485vh #FFF , 139vh 177vh #FFF , 130vh 41vh #FFF , 416vh 383vh #FFF , 81vh 640vh #FFF , 254vh 63vh #FFF , 329vh 673vh #FFF , 486vh 578vh #FFF , 99vh 387vh #FFF , 332vh 377vh #FFF , 68vh 536vh #FFF , 441vh 207vh #FFF , 161vh 478vh #FFF;
}

.stars2 {
  z-index: -1;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  box-shadow: 457vh 137vh #FFF , 886vh 445vh #FFF , 446vh 89vh #FFF , 98vh 607vh #FFF , 342vh 514vh #FFF , 918vh 589vh #FFF , 20vh 695vh #FFF , 584vh 888vh #FFF , 261vh 618vh #FFF , 921vh 305vh #FFF , 471vh 119vh #FFF , 693vh 632vh #FFF , 489vh 15vh #FFF , 633vh 148vh #FFF , 111vh 848vh #FFF , 974vh 136vh #FFF , 305vh 102vh #FFF , 711vh 409vh #FFF , 94vh 19vh #FFF , 122vh 85vh #FFF , 992vh 495vh #FFF , 267vh 194vh #FFF , 724vh 266vh #FFF , 34vh 129vh #FFF , 242vh 403vh #FFF , 653vh 521vh #FFF , 514vh 145vh #FFF , 113vh 736vh #FFF , 660vh 707vh #FFF , 297vh 671vh #FFF , 979vh 440vh #FFF , 429vh 869vh #FFF , 6vh 781vh #FFF , 877vh 574vh #FFF , 452vh 83vh #FFF , 454vh 749vh #FFF , 981vh 864vh #FFF , 669vh 486vh #FFF , 696vh 890vh #FFF , 635vh 128vh #FFF , 773vh 641vh #FFF , 416vh 568vh #FFF , 601vh 225vh #FFF , 285vh 392vh #FFF , 989vh 643vh #FFF , 671vh 274vh #FFF , 325vh 680vh #FFF , 793vh 378vh #FFF , 144vh 307vh #FFF , 744vh 706vh #FFF , 444vh 679vh #FFF , 585vh 288vh #FFF , 328vh 501vh #FFF , 10vh 515vh #FFF , 416vh 827vh #FFF , 30vh 176vh #FFF , 32vh 647vh #FFF , 560vh 268vh #FFF , 310vh 10vh #FFF , 912vh 519vh #FFF , 704vh 222vh #FFF , 617vh 809vh #FFF , 924vh 182vh #FFF , 373vh 148vh #FFF , 115vh 341vh #FFF , 363vh 506vh #FFF , 8vh 42vh #FFF , 61vh 579vh #FFF , 703vh 39vh #FFF , 902vh 245vh #FFF , 48vh 77vh #FFF , 934vh 290vh #FFF , 15vh 170vh #FFF , 220vh 540vh #FFF , 183vh 302vh #FFF , 958vh 472vh #FFF , 821vh 818vh #FFF , 727vh 843vh #FFF , 244vh 496vh #FFF , 67vh 445vh #FFF , 256vh 87vh #FFF , 284vh 520vh #FFF , 323vh 662vh #FFF , 758vh 379vh #FFF , 108vh 72vh #FFF , 461vh 444vh #FFF , 160vh 744vh #FFF , 835vh 542vh #FFF , 470vh 101vh #FFF , 682vh 494vh #FFF , 613vh 449vh #FFF , 144vh 768vh #FFF , 740vh 373vh #FFF , 314vh 571vh #FFF , 337vh 207vh #FFF , 965vh 642vh #FFF , 139vh 120vh #FFF , 984vh 838vh #FFF , 901vh 516vh #FFF , 138vh 230vh #FFF , 600vh 775vh #FFF , 483vh 676vh #FFF , 988vh 343vh #FFF , 292vh 329vh #FFF , 187vh 823vh #FFF , 736vh 588vh #FFF , 711vh 674vh #FFF , 712vh 349vh #FFF , 543vh 899vh #FFF , 611vh 750vh #FFF , 630vh 108vh #FFF , 959vh 658vh #FFF , 322vh 806vh #FFF , 748vh 763vh #FFF , 827vh 151vh #FFF , 340vh 253vh #FFF , 227vh 543vh #FFF , 979vh 209vh #FFF , 683vh 506vh #FFF , 791vh 310vh #FFF , 999vh 233vh #FFF , 966vh 79vh #FFF , 873vh 328vh #FFF , 95vh 304vh #FFF , 344vh 627vh #FFF , 435vh 396vh #FFF , 577vh 491vh #FFF , 918vh 796vh #FFF , 673vh 500vh #FFF , 839vh 82vh #FFF , 879vh 240vh #FFF , 859vh 197vh #FFF , 946vh 222vh #FFF , 953vh 293vh #FFF , 764vh 763vh #FFF , 161vh 305vh #FFF , 823vh 273vh #FFF , 243vh 396vh #FFF , 358vh 285vh #FFF , 228vh 548vh #FFF , 775vh 437vh #FFF , 661vh 180vh #FFF , 274vh 897vh #FFF , 367vh 730vh #FFF , 995vh 156vh #FFF , 973vh 708vh #FFF , 290vh 236vh #FFF , 77vh 586vh #FFF , 17vh 140vh #FFF , 553vh 827vh #FFF , 690vh 226vh #FFF , 299vh 626vh #FFF , 187vh 716vh #FFF , 312vh 811vh #FFF , 498vh 114vh #FFF , 315vh 78vh #FFF , 63vh 266vh #FFF , 180vh 747vh #FFF , 364vh 164vh #FFF , 732vh 167vh #FFF , 154vh 349vh #FFF , 464vh 425vh #FFF , 792vh 829vh #FFF , 824vh 41vh #FFF , 268vh 287vh #FFF , 903vh 620vh #FFF , 888vh 618vh #FFF , 568vh 7vh #FFF , 157vh 898vh #FFF , 375vh 750vh #FFF , 599vh 892vh #FFF , 810vh 283vh #FFF , 63vh 174vh #FFF , 133vh 468vh #FFF , 401vh 69vh #FFF , 127vh 4vh #FFF , 837vh 32vh #FFF , 250vh 399vh #FFF , 399vh 354vh #FFF , 390vh 36vh #FFF , 607vh 735vh #FFF , 311vh 84vh #FFF , 968vh 602vh #FFF , 555vh 716vh #FFF , 431vh 674vh #FFF , 765vh 170vh #FFF , 909vh 349vh #FFF , 162vh 851vh #FFF , 108vh 420vh #FFF , 62vh 845vh #FFF , 939vh 237vh #FFF , 647vh 9vh #FFF , 510vh 2vh #FFF , 952vh 581vh #FFF , 257vh 77vh #FFF , 294vh 507vh #FFF , 9vh 431vh #FFF , 198vh 15vh #FFF , 400vh 296vh #FFF , 538vh 303vh #FFF , 185vh 618vh #FFF , 426vh 93vh #FFF , 722vh 156vh #FFF , 777vh 793vh #FFF , 942vh 202vh #FFF , 363vh 143vh #FFF , 466vh 438vh #FFF , 310vh 30vh #FFF , 772vh 803vh #FFF , 690vh 610vh #FFF , 641vh 319vh #FFF , 394vh 783vh #FFF , 758vh 35vh #FFF , 13vh 537vh #FFF , 650vh 752vh #FFF , 38vh 213vh #FFF , 525vh 280vh #FFF , 900vh 341vh #FFF , 740vh 552vh #FFF , 13vh 767vh #FFF , 968vh 270vh #FFF , 54vh 142vh #FFF , 598vh 647vh #FFF , 64vh 752vh #FFF , 250vh 846vh #FFF , 17vh 720vh #FFF , 358vh 342vh #FFF , 212vh 763vh #FFF , 782vh 122vh #FFF , 87vh 424vh #FFF , 92vh 199vh #FFF , 286vh 900vh #FFF , 218vh 215vh #FFF , 974vh 525vh #FFF , 473vh 286vh #FFF , 464vh 803vh #FFF , 57vh 458vh #FFF , 484vh 73vh #FFF , 542vh 303vh #FFF , 398vh 493vh #FFF , 790vh 534vh #FFF , 937vh 18vh #FFF , 58vh 253vh #FFF , 61vh 800vh #FFF , 21vh 133vh #FFF , 246vh 357vh #FFF , 775vh 98vh #FFF , 610vh 83vh #FFF , 915vh 321vh #FFF , 858vh 742vh #FFF;
  animation: star-animation 125s linear infinite;
}
.stars2:after {
  content: " ";
  top: -900px;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  position: absolute;
  box-shadow: 372vh 109vh #FFF , 405vh 464vh #FFF , 243vh 482vh #FFF , 190vh 313vh #FFF , 118vh 116vh #FFF , 358vh 511vh #FFF , 219vh 584vh #FFF , 410vh 140vh #FFF , 326vh 777vh #FFF , 335vh 405vh #FFF , 401vh 632vh #FFF , 247vh 79vh #FFF , 52vh 183vh #FFF , 238vh 9vh #FFF , 13vh 257vh #FFF , 228vh 436vh #FFF , 360vh 91vh #FFF , 422vh 585vh #FFF , 380vh 352vh #FFF , 363vh 334vh #FFF , 251vh 700vh #FFF , 455vh 224vh #FFF , 407vh 667vh #FFF , 168vh 231vh #FFF , 358vh 302vh #FFF , 304vh 795vh #FFF , 426vh 440vh #FFF , 306vh 182vh #FFF , 6vh 146vh #FFF , 415vh 104vh #FFF , 279vh 605vh #FFF , 6vh 491vh #FFF , 3vh 76vh #FFF , 236vh 333vh #FFF , 184vh 701vh #FFF , 391vh 274vh #FFF , 299vh 210vh #FFF , 322vh 451vh #FFF , 297vh 262vh #FFF , 194vh 546vh #FFF , 381vh 165vh #FFF , 98vh 479vh #FFF , 33vh 585vh #FFF , 281vh 539vh #FFF , 28vh 22vh #FFF , 147vh 704vh #FFF , 348vh 683vh #FFF , 119vh 235vh #FFF , 55vh 66vh #FFF , 470vh 141vh #FFF , 252vh 669vh #FFF , 166vh 222vh #FFF , 338vh 648vh #FFF , 473vh 364vh #FFF , 67vh 137vh #FFF , 77vh 132vh #FFF , 352vh 619vh #FFF , 466vh 363vh #FFF , 357vh 766vh #FFF , 404vh 551vh #FFF , 39vh 420vh #FFF , 256vh 512vh #FFF , 479vh 312vh #FFF , 349vh 709vh #FFF , 456vh 398vh #FFF , 305vh 494vh #FFF , 181vh 786vh #FFF , 445vh 344vh #FFF , 380vh 574vh #FFF , 337vh 511vh #FFF , 302vh 542vh #FFF , 344vh 300vh #FFF , 440vh 350vh #FFF , 444vh 719vh #FFF , 219vh 618vh #FFF , 194vh 226vh #FFF , 73vh 500vh #FFF , 180vh 570vh #FFF , 380vh 769vh #FFF , 428vh 76vh #FFF , 22vh 253vh #FFF , 90vh 798vh #FFF , 79vh 783vh #FFF , 445vh 572vh #FFF , 249vh 423vh #FFF , 72vh 379vh #FFF , 84vh 381vh #FFF , 56vh 46vh #FFF , 201vh 405vh #FFF , 95vh 436vh #FFF , 115vh 248vh #FFF , 397vh 605vh #FFF , 142vh 363vh #FFF , 491vh 37vh #FFF , 485vh 723vh #FFF , 202vh 95vh #FFF , 71vh 336vh #FFF , 204vh 528vh #FFF , 456vh 626vh #FFF , 479vh 204vh #FFF , 271vh 153vh #FFF , 256vh 325vh #FFF , 443vh 619vh #FFF , 373vh 446vh #FFF , 407vh 27vh #FFF , 249vh 312vh #FFF , 155vh 84vh #FFF , 43vh 789vh #FFF , 310vh 119vh #FFF , 288vh 426vh #FFF , 290vh 379vh #FFF , 109vh 556vh #FFF , 107vh 568vh #FFF , 65vh 298vh #FFF , 333vh 547vh #FFF , 112vh 236vh #FFF , 208vh 413vh #FFF , 350vh 324vh #FFF , 286vh 709vh #FFF , 367vh 564vh #FFF , 389vh 91vh #FFF , 480vh 527vh #FFF , 120vh 213vh #FFF , 403vh 168vh #FFF , 437vh 700vh #FFF , 224vh 129vh #FFF , 50vh 384vh #FFF , 144vh 441vh #FFF , 28vh 183vh #FFF , 412vh 70vh #FFF , 4vh 517vh #FFF , 148vh 539vh #FFF , 44vh 574vh #FFF , 390vh 370vh #FFF , 461vh 776vh #FFF , 324vh 795vh #FFF , 142vh 232vh #FFF , 82vh 256vh #FFF , 181vh 546vh #FFF , 328vh 650vh #FFF , 21vh 233vh #FFF , 399vh 433vh #FFF , 76vh 385vh #FFF , 327vh 26vh #FFF , 7vh 764vh #FFF , 473vh 21vh #FFF , 270vh 626vh #FFF , 473vh 71vh #FFF , 380vh 80vh #FFF , 363vh 492vh #FFF , 173vh 402vh #FFF , 240vh 614vh #FFF , 458vh 561vh #FFF , 314vh 203vh #FFF , 416vh 174vh #FFF , 70vh 436vh #FFF , 434vh 96vh #FFF , 332vh 476vh #FFF , 398vh 665vh #FFF , 324vh 216vh #FFF , 463vh 497vh #FFF , 151vh 390vh #FFF , 75vh 634vh #FFF , 274vh 157vh #FFF , 39vh 755vh #FFF , 299vh 94vh #FFF , 105vh 451vh #FFF , 441vh 73vh #FFF , 435vh 340vh #FFF , 364vh 168vh #FFF , 282vh 505vh #FFF , 298vh 71vh #FFF , 222vh 733vh #FFF , 232vh 782vh #FFF , 254vh 546vh #FFF , 335vh 640vh #FFF , 231vh 671vh #FFF , 148vh 790vh #FFF , 10vh 543vh #FFF , 267vh 695vh #FFF , 19vh 267vh #FFF , 194vh 745vh #FFF , 452vh 349vh #FFF , 431vh 709vh #FFF , 180vh 269vh #FFF , 222vh 94vh #FFF , 31vh 729vh #FFF , 20vh 566vh #FFF , 369vh 81vh #FFF , 53vh 555vh #FFF , 351vh 749vh #FFF , 73vh 300vh #FFF , 370vh 340vh #FFF , 210vh 216vh #FFF , 316vh 458vh #FFF , 116vh 325vh #FFF , 381vh 452vh #FFF , 315vh 280vh #FFF , 337vh 84vh #FFF , 148vh 187vh #FFF , 211vh 553vh #FFF , 119vh 663vh #FFF , 79vh 376vh #FFF , 221vh 65vh #FFF , 164vh 784vh #FFF , 458vh 379vh #FFF , 66vh 409vh #FFF , 97vh 453vh #FFF , 310vh 114vh #FFF , 253vh 161vh #FFF , 327vh 40vh #FFF , 145vh 480vh #FFF , 319vh 87vh #FFF , 94vh 70vh #FFF , 373vh 11vh #FFF , 170vh 645vh #FFF , 455vh 692vh #FFF , 389vh 26vh #FFF , 146vh 653vh #FFF , 72vh 22vh #FFF , 407vh 626vh #FFF , 416vh 342vh #FFF , 75vh 404vh #FFF , 444vh 605vh #FFF , 337vh 785vh #FFF , 328vh 110vh #FFF , 60vh 273vh #FFF , 420vh 221vh #FFF , 21vh 310vh #FFF , 325vh 736vh #FFF , 411vh 195vh #FFF , 262vh 357vh #FFF , 253vh 4vh #FFF , 299vh 208vh #FFF , 62vh 438vh #FFF , 484vh 761vh #FFF , 38vh 238vh #FFF , 418vh 587vh #FFF , 28vh 286vh #FFF , 87vh 628vh #FFF , 113vh 175vh #FFF , 83vh 713vh #FFF , 322vh 441vh #FFF , 190vh 12vh #FFF , 116vh 274vh #FFF , 46vh 237vh #FFF , 269vh 38vh #FFF , 414vh 497vh #FFF , 69vh 394vh #FFF , 70vh 419vh #FFF;
}

.stars3 {
  z-index: -1;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  box-shadow: 754vh 342vh #FFF , 981vh 553vh #FFF , 155vh 407vh #FFF , 776vh 265vh #FFF , 869vh 701vh #FFF , 206vh 700vh #FFF , 456vh 342vh #FFF , 222vh 111vh #FFF , 803vh 807vh #FFF , 576vh 533vh #FFF , 189vh 248vh #FFF , 368vh 25vh #FFF , 699vh 560vh #FFF , 700vh 316vh #FFF , 369vh 63vh #FFF , 468vh 743vh #FFF , 741vh 483vh #FFF , 940vh 504vh #FFF , 192vh 180vh #FFF , 337vh 446vh #FFF;
  animation: star-animation 175s linear infinite;
}
.stars3:after {
  content: " ";
  top: -900px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  position: absolute;
  box-shadow: 317vh 57vh #FFF , 459vh 190vh #FFF , 222vh 337vh #FFF , 450vh 314vh #FFF , 213vh 502vh #FFF , 185vh 628vh #FFF , 143vh 238vh #FFF , 45vh 711vh #FFF , 15vh 376vh #FFF , 56vh 313vh #FFF , 177vh 134vh #FFF , 484vh 503vh #FFF , 102vh 347vh #FFF , 143vh 408vh #FFF , 145vh 179vh #FFF , 10vh 694vh #FFF , 427vh 1vh #FFF , 85vh 584vh #FFF , 383vh 410vh #FFF , 123vh 492vh #FFF;
}

</style>
