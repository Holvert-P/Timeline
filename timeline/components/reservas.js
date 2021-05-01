Vue.component('reservas', {
    template: //html
        `
    <div>
    <v-row>
    <v-col
      cols="12"
      md="4"
    >
    <!--CAMPO NOMBRE-->
    <v-text-field 
          v-model="$store.state.nuevoNombre"
          label="Nombre"
      
          ></v-text-field>
        
          
    </v-col>
    <v-col
      cols="12"
      md="2"
    >
    
        <v-menu
        ref="menu_fecha"
        v-model="menu_fecha"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
    >
        <template v-slot:activator="{ on, attrs }">
        <!-- CAMPO FECHA -->
        <v-text-field
            v-model="$store.state.fecha"
            label="Fecha"
            readonly
            v-bind="attrs"
            v-on="on"
        ></v-text-field>
        </template>
        <v-date-picker
        v-model="$store.state.fecha"
        no-title
        scrollable
        >
        <v-spacer></v-spacer>
        <!--BOTONES DEL DATEPICKER-->
        <v-btn
            text
            color="primary"
            @click="menu_fecha = false"
        >
            Cancel
        </v-btn>
        <v-btn
            text
            color="primary"
            @click="$refs.menu_fecha.save(date)"
        >
            OK
        </v-btn>
        </v-date-picker>
    </v-menu>
    </v-col>
  <!--Hora DESDE-->
  <v-col
          cols="12"
          md="2"
        >
  <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="$store.state.hora"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="$store.state.hora"
            label="Desde"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2"
          v-model="$store.state.hora"
          full-width
          @click:minute="$refs.menu.save(hora)"
        ></v-time-picker>
      </v-menu>
      </v-col>
      <!--Hora HASTA-->
      <v-col
          cols="12"
          md="2"
        >
      <v-menu
        ref="menu_hasta"
        v-model="menu3"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="$store.state.hora2"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="$store.state.hora2"
            label="Hasta"        
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu3"
          v-model="$store.state.hora2"
          full-width
          @click:minute="$refs.menu_hasta.save(hora2)"
        ></v-time-picker>
        </v-menu>
    </v-col>
    
    <v-col 
    col="12"
    md="2"
    >
    <!--BOTON GUARDAR-->
    <v-btn id="btn"
      elevation="2"
      color="success"
      @click="$store.commit('agregarNombre')"
      v-if ="$store.state.nuevoNombre !=='' && $store.state.hora !=='' && $store.state.hora2 !=='' && $store.state.fecha !=='' " 
      >Guardar</v-btn>
    </v-col>

    </v-row>
  </div>
    
    `,

    data() {
        return {
            date: new Date().toISOString().substr(0, 10),
            modal: false,
            modal2: false,
            //datepickers
            menu: false,
            menu_hasta: false,
            menu2: false,
            menu3: false,
            menu_fecha: false,
            btnEnabled: true
        }
    },
    computed: {
        ...Vuex.mapState(['nombres', 'nuevoNombre', 'hora', 'hora2'])
    },

    methods: {
        ...Vuex.mapMutations(['agregarNombre'])
    }
})