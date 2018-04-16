<template lang="html">
  <div>
    <!-- # Search -->
    <div class="row first-div">
      <search-bar></search-bar>
    </div>
      <!-- # TOP3 -->
    <div class="row grey lighten-2">
      <br/>
      <div class="container">
        <h3 class="grey-text text-darken-3 center">Here is our top #3 ranking</h3>
        <br/>
        <institution-card v-for="institution in institutions"
          v-bind:key="institution"
          v-bind:title="institution.title"
          v-bind:content="institution.description"
        >
        </institution-card>
      </div>
      <div class="container center">
        <button class="btn blue darken-2">all institutions</button>
      </div>
      <br/>
    </div>
      <!-- # Choose your Section -->
    <div class="row grey lighten-2">
      <br/>
      <div class="container">
        <h3 class="grey-text text-darken-3 center">Choose your section</h3>
        <br/>
        <section-panel v-for="section in sections"
          v-bind:key="section"
          v-bind:title="section.title"
          v-bind:courses="section.courses"
        >
        </section-panel>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader';
import CustomFooter from '@/components/CustomFooter';
import SearchBar from '@/components/SearchBar';
import SectionPanel from '@/components/SectionPanel';
import InstitutionCard from '@/components/InstitutionCard';

export default {
  name: 'Landing',
  components: {
    CustomHeader,
    CustomFooter,
    InstitutionCard,
    SectionPanel,
    SearchBar,
  },
  data() {
    return {
      institutions: {
        impacta: {
          title: 'Faculdade Fictícia A',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        unip: {
          title: 'Faculdade Fictícia B',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        uninove: {
          title: 'Faculdade Fictícia C',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      },
      sections: {
        tech: {
          title: 'Technology',
          courses: [
            ['Course 1', '#'],
            ['Course 2', '#'],
            ['Course 3', '#'],
            ['Course 4', '#'],
            ['Course 5', '#'],
            ['Course 6', '#'],
          ],
        },
        eng: {
          title: 'Engineering',
          courses: [
            ['Course 1', '#'],
            ['Course 2', '#'],
            ['Course 3', '#'],
          ],
        },
        bio: {
          title: 'Biology',
          courses: [
            ['Course 1', '#'],
            ['Course 2', '#'],
            ['Course 3', '#'],
            ['Course 4', '#'],
            ['Course 5', '#'],
          ],
        },
        mech: {
          title: 'Mechanics',
          courses: [
            ['Course 1', '#'],
            ['Course 2', '#'],
          ],
        },
      },
    };
  },
};

</script>

<style lang="css">
  .row {
    margin: 0 0 0 0 !important;
  }
  .first-div {
    height: 370px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(
      https://images.freecreatives.com/wp-content/uploads/2016/04/Study-Quotes-Wallpaper-1.jpg
    );
  }
</style>
