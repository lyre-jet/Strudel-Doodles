setCpm(120/4)
//$: sound("bd*4, [~ <sd [cp,sd]>]*2, [~ hh]*4").bank("RolandTR909")
//$: sound("bd*4, [~ sd]*2,[~ cp]*2, [<<hh <hh*2>> ~ <hh*4 hh*4 [hh hh hh ~]> ~>]*3").bank("RolandTR909")._pianoroll()
//I want to remove the 4th hh hit on the 3rd cycle
//$: sound("bd*4, [~ sd]*2,[~ cp]*2, [<~ hh> <hh*2 hh hh hh>]*4").bank("RolandTR909")._pianoroll()
//$: note("<36*4 [43*4 43]>").sound("sawtooth").trans(-12).delay("<0 0>")
//$: note("<48*4 ~ [<48 52> <48 45>@3]>*3").every(2, x => x.transpose(7)).sound("sawtooth").trans(-12).delay("<0 0>")._punchcard()
// Plays 'c3' every cycle, but every second cycle it transposes up by 7 semitones (a fifth)
//$: note("c3 c4").every(2, x => x.transpose(7))

//$: note("<[e,g,d] ~ [e,g,d] [e,g,d]>*16").transpose("0").trans(-16).clip("0.75")._pianoroll()

//$: sound("<numbers:0 numbers:0 numbers:1 numbers:0 numbers:1 numbers:1 numbers:0 ->*8").speed("<1.15>")
//$: note("52*8 59*8 62*8 64*8")._pianoroll()
//$: note("<52 59 62 64>*[1 2 4 8]")._pianoroll()


//$: note("[48 ~ 52 ~ 48 ~ 52 52 ]*2").sound("gm_breath_noise:7")
//$: note("[48 ~ 52 ~ 48 ~ 52 52 ]*2").sound("gm_breath_noise:7")

//$: note("[48 ~ 52 ~ 48 ~ <[52 52], [52 ~ 48 ~ 52 ~ 48]> ]*2").trans(8)
//$: "hh".s().struct("1 <0 1> 0 1 1 0 0 0 1 1 1 0 1 1 0 0")
//$: "bd".s().struct("[1 <1*2 1*2 1*2 1>]*4").sound("bd:2").lpf(300)
//$: note("[0 1 2 3 4 5 6 7]*<1 2 4 8 16>").scale('C:major').scaleTranspose(-2)
//$: note("[[36@2.5 <32 42>]*2]").sound("sawtooth").trans(-12).lpf(400)._pianoroll()

//$: "cp".s().struct("[<[1 1] 1> ~]*4").bank("RolandTR909").lpf(saw.range(800, 2000))
//$: sound("[~ <sd [cp,sd]>]*2, [~ hh]*4").bank("RolandTR909")
$: sound("sd*2, [~ hh*2]*4").bank("RolandTR909").lpf(4000)._punchcard()
$: sound("bd*4").sound("bd:2")
$: n("<0 4 0 9 7>*16".add("<0>*2")).scale("g:minor").trans(-12).s("sawtooth").lpf(sine.range(200, 8000).fast(1))
  .delay(0.6).pan(rand).fm(0.8).fmwave('white').lpenv(slider )._scope()
