Vue.component('tabla', {
    template: //html
        `
        <div>
    <v-simple-table dense >
    <template v-slot:default>      
      <thead class="head">
        <tr>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
          Hora de entrada
        </th>
        <th class="text-left">
        Hora de salida
      </th>
          <th class="text-left">
            Acción
          </th>

          </tr>
          
      </thead>
      <tbody>
      <tr v-for="(item,index) of nombres" :key="index" id="itemsTable">
        <td> {{item.nombre}}</td>
        <td id="1" ><span>{{item.horario}}</span></td>
        <td id="1"> <span>{{item.horario2}}</span></td>
        <td>
        <!--ICON BORRAR-->
          <v-icon
          class="btn"    
          @click="eliminarReserva(index)"
          color="error"
          >
          mdi-delete
          </v-icon>
        </td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>

    `,
    computed: {
        ...Vuex.mapState(['nuevoNombre', 'nombres'])
    },
    //para mapear mutaciones usar los "methods"
    methods: {
        ...Vuex.mapMutations(['agregarNombre', 'eliminarReserva'])
    }


})