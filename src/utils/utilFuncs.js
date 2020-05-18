const slugify = function (text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/\+/g, "p") // Skipti út '+' fyrir 'p' til að 'C' og 'C++' vísi ekki eins.
      .replace(/[^\w-]+/g, "") // Remove all non-word chars
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, "") // Trim - from end of text

}

// Næstum alveg stolið héðan: https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
function youtubeId(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  var match = url.match(regExp)
  return match && match[7].length === 11 ? match[7] : false
}

/* Kannski er þetta mesti óþarfi sem ég hef gert?
 * En mér finnst þetta allavega skemmtilegt.
 * Ég átta mig á að það er hægt að gera þetta í mikið styttri kóða
 * en mér finnst þetta nokkuð læsilegt og skiljanlegt svona.
 * Ég gæti kannski sett þetta í tuples með totalCount sem key og strenginn sem value...en þetta er fljótlegra...*/

function numToString(num) {
  let str
  let tmpNum = num
  if (num < 20) {
    switch (num) {
      case 1:
        str = "Ein"
        break
      case 2:
        str = "Tvær"
        break
      case 3:
        str = "Þrjár"
        break
      case 4:
        str = "Fjórar"
        break
      case 5:
        str = "Fimm"
        break
      case 6:
        str = "Sex"
        break
      case 7:
        str = "Sjö"
        break
      case 8:
        str = "Átta"
        break
      case 9:
        str = "Níu"
        break
      case 10:
        str = "Tíu"
        break
      case 11:
        str = "Ellefu"
        break
      case 12:
        str = "Tólf"
        break
      case 13:
        str = "Þrettán"
        break
      case 14:
        str = "Fjórtán"
        break
      case 15:
        str = "Fimmtán"
        break
      case 16:
        str = "Sextán"
        break
      case 17:
        str = "Sautján"
        break
      case 18:
        str = "Átján"
        break
      case 19:
        str = "Nítján"
        break
      default:
        str = num
    }
  } else {
    // 100 og 1000
    if (num >= 100 && num < 200) {
      str = "Hundrað"
      tmpNum -= 100
    }

    if (num >= 200 && num < 300) {
      str = "Tvöhundruð"
      tmpNum -= 200
    }

    if (num >= 300 && num < 400) {
      str = "Þrjúhundruð"
      tmpNum -= 300
    }

    if (num >= 400 && num < 500) {
      str = "Fjögurhundruð"
      tmpNum -= 400
    }

    if (num >= 500 && num < 600) {
      str = "Fmmhundruð"
      tmpNum -= 500
    }

    if (num >= 600 && num < 700) {
      str = "Sexhundruð"
      tmpNum -= 600
    }

    if (num >= 700 && num < 800) {
      str = "Sjöhundruð"
      tmpNum -= 700
    }

    if (num >= 800 && num < 900) {
      str = "Áttahundruð"
      tmpNum -= 800
    }

    if (num >= 900 && num < 1000) {
      str = "Níuhundruð"
      tmpNum -= 900
    }

    // Á milli 20 og 100
    if (num >= 20 && num < 30) {
      str = "Tuttugu"
      tmpNum -= 20
    }

    if (num >= 30 && num < 40) {
      str = "Þrjátíu"
      tmpNum -= 30
    }

    if (num >= 40 && num < 50) {
      str = "Fjörtíu"
      tmpNum -= 40
    }

    if (num >= 50 && num < 60) {
      str = "Fimmtíu"
      tmpNum -= 50
    }

    if (num >= 60 && num < 70) {
      str = "Sextíu"
      tmpNum -= 60
    }

    if (num >= 70 && num < 80) {
      str = "Sjötíu"
      tmpNum -= 70
    }

    if (num >= 80 && num < 90) {
      str = "Áttatíu"
      tmpNum -= 80
    }

    if (num >= 90 && num < 100) {
      str = "Níutíu"
      tmpNum -= 90
    }

    // Viðbót á milli 100 og 1000
    if (tmpNum >= 20 && tmpNum < 30) {
      str += " tuttugu"
      tmpNum -= 20
    }

    if (tmpNum >= 30 && tmpNum < 40) {
      str += " þrjátíu"
      tmpNum -= 30
    }

    if (tmpNum >= 40 && tmpNum < 50) {
      str += " fjörtíu"
      tmpNum -= 40
    }

    if (tmpNum >= 50 && tmpNum < 60) {
      str += " fimmtíu"
      tmpNum -= 50
    }

    if (tmpNum >= 60 && tmpNum < 70) {
      str += " sextíu"
      tmpNum -= 60
    }

    if (tmpNum >= 70 && tmpNum < 80) {
      str += " sjötíu"
      tmpNum -= 70
    }

    if (tmpNum >= 80 && tmpNum < 90) {
      str += " áttatíu"
      tmpNum -= 80
    }

    if (tmpNum >= 90 && tmpNum < 100) {
      str += " níutíu"
      tmpNum -= 90
    }

    // Endingar þegar yfir 20
    if (tmpNum === 1) {
      str += " og ein"
    }

    if (tmpNum === 2) {
      str += " og tvær"
    }

    if (tmpNum === 3) {
      str += " og þrjár"
    }

    if (tmpNum === 4) {
      str += " og fjórar"
    }

    if (tmpNum === 5) {
      str += " og fimm"
    }

    if (tmpNum === 6) {
      str += " og sex"
    }

    if (tmpNum === 7) {
      str += " og sjö"
    }

    if (tmpNum === 8) {
      str += " og átta"
    }

    if (tmpNum === 9) {
      str += " og níu"
    }
  }

  // Ég á ekki von á að það þurfi yfir 1000 strax !
  if (num >= 1000) {
    str = num
  }
  return str
}
module.exports = { slugify, youtubeId, numToString }
