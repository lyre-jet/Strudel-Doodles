setCpm(125/4)
let tranceKick = s("bd:2*4").end(0.2).decay(0.04).lpf(150).gain(5);

// Define the bassline (uses a low sine wave)
let tranceBass = s("[sine ~]*8").note("[f1 d1]*4 ").gain(5)
  .lpf(saw.range(1000, 0).fast(4))
  .hpf(slider(3.9, 0, 5, 0.1));

// Define the gain pattern for 'sidechain ducking'
let duckingPattern = every(4, "1 2");

// Apply the gain pattern to the bassline
let processedBass = tranceBass.gain(duckingPattern);

// Stack both sounds to play together
const bass=  stack(
  tranceKick,
  processedBass
).gain(2).loopAt(2).hpf(slider(10, 0, 100, 0.1));

const drums = sound("bd:2*4 ,rolandtr909_sd*2, [~ rolandtr808_hh*2]*4").lpf(4000)
const low = n("<~ ~ [0]*4 <9 9 7 7>, ~ ~ ~ [~ [~ <9 9 7 7>]]>*4")
  .scale("g:minor").trans(-18).s("supersaw")
  .lpf(saw.range(200, slider(12000, 800, 16000, 800)).fast(2))
  .hpf(sine.range(0, slider(100, 0, 800, 50)).slow(2))
  .delay(0.6).room(slider(1.716, 0, 4))
  .jux(iter(1)).pan(sine.range(0, 1).fast(6))
  .fm(0.8 ).fmwave('white').lpenv(slider(1, 1, 10, 1) )

const mid = n("<~ <[9 9*2] [9 9*2] [7 7*2] [7 7*2]> <[9 ~] ~ ~ [7 ~]> ~, ~ ~ [~ [<9*4 7*4>/2]] ~>*4")
  .scale("g:minor").trans(-6).s("sawtooth")
  .lpf(saw.range(200, slider(16000, 800, 16000, 800)).fast(2))
  .delay(0.5).room(slider(1.716, 0, 4))
  .jux(iter(1)).pan(sine.range(1, 0).fast(6))
  .fm(0.8 ).lpenv(slider(1, 1, 10, 1) )

const high =  arrange([2, note("[~ 16 16*2 16 ~ 16 16*2 16]")], [2, note("[~ 15 15*2 15 ~ 15 15*2 15 ]")])
  .scale("g:minor").trans(-6).s("tri")
  .lpf(saw.range(200, slider(8800, 800, 16000, 800)).fast(2))
  .delay(0.38).room(slider(0.576, 0, 4))
  .fm(0.8 ).lpenv(slider(3, 1, 10, 1) )

$: bass.gain(slider(1.848, 0,4))
$: drums.gain(slider(0.36, 0,1))
$: low.gain(slider(0.418, 0,1))
$: mid.gain(slider(0.272, 0,1))
$: high.gain(slider(0.212, 0,1))
