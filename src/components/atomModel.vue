<template>
  <div id="atom-model">
    <svg width="300" height="300">
      <defs>
        <radialGradient id="redGradient">
          <stop offset="0%" stop-color="white"></stop>
          <stop offset="100%" stop-color="#dd2622"></stop>
        </radialGradient>
        <radialGradient id="blueGradient">
          <stop offset="0%" stop-color="white"></stop>
          <stop offset="100%" stop-color="#108ee9"></stop>
        </radialGradient>
        <radialGradient id="yellowGradient">
          <stop offset="0%" stop-color="white"></stop>
          <stop offset="100%" stop-color="#f39800"></stop>
        </radialGradient>
        <radialGradient id="lightblueGradient">
          <stop offset="0%" stop-color="white"></stop>
          <stop offset="100%" stop-color="#00b7ee"></stop>
        </radialGradient>
      </defs>
      <ellipse cx="150" cy="150" rx="120" ry="50" stroke="black" fill="transparent"/>
      <circle cx="140" cy="220" r="13" fill="url(#redGradient)" class="redRotate"></circle>
      <circle id="lightBlue" r="22" fill="url(#lightblueGradient)"></circle>
      <circle cx="150" cy="137" r="35" fill="url(#blueGradient)" class="rotate"></circle>
      <circle cx="250" cy="90" r="17" fill="url(#yellowGradient)" class="yellowRotate"></circle>
    </svg>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      isReverse: false,
      x: 30,
      y: 0
    }
  },
  mounted () {
    requestAnimationFrame(this.loopAnim)
  },
  methods: {
    getYCoordinate1 () {
      return Math.sqrt(Math.pow(50, 2) - (Math.pow(50, 2) * Math.pow((this.x - 150), 2) / Math.pow(120, 2))) + 150
    },
    loopAnim () {
      this.y = this.getYCoordinate1(this.x)
      if (this.x >= 270) this.isReverse = true
      else if (this.x <= 30) this.isReverse = false
      if (this.isReverse) {
        if (this.x < 33 || this.x > 267) {
          this.x -= 0.5
        } else if (this.x < 50 || this.x > 250) {
          this.x -= 1.5
        } else {
          this.x -= 2
        }
        this.y = 300 - this.y
      } else {
        if (this.x < 33 || this.x > 267) {
          this.x += 0.5
        } else if (this.x < 50 || this.x > 250) {
          this.x += 1.5
        } else {
          this.x += 2
        }
      }
      const rotate = document.querySelector('#lightBlue')
      if (rotate) {
        rotate.style.transform = `translate3d(${this.x}px, ${this.y.toFixed(1)}px, 0)`
        requestAnimationFrame(this.loopAnim)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.yellowRotate, .redRotate {
  transition: transform 1s linear;
}
svg:hover .yellowRotate {
  transform: scale3d(2, 2, 1) translate3d(-230px, -10px, 0);
}
svg:hover .redRotate {
  transform: scale3d(0.5, 0.5, 1) translate3d(300px, 100px, 0);
}
</style>
