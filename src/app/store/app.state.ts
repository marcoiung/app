import { createAction, createReducer, on, props } from '@ngrx/store';
import { IShowHideMegaMenu } from './model/model';



// cria a interface com o elemento que terá o estado gerenciado.
export interface IAppState {
  showHideMegaMenu: IShowHideMegaMenu,
};

// cria um inicializador deixando o elemento como seus valores iniciais zerados.
export const appInitialState: IAppState = {
  showHideMegaMenu: {
    showHideMenu: false
  },
};1

/* Actions */
export const setExibition = createAction('[ showHideMenu ] Atualiza a exibição do Mega Menu no Header do portal' , props<{ payload: IShowHideMegaMenu }>());
export const loadExibition = createAction('[ showHideMenu ] Carrega o status da exbição true ou false');


/** Reducer da aplicação, identifica a Action que foi executada e faz a alteração no elemento */
/** appInitialState é passado como o estado inicial da aplicação */
export const appReducer = createReducer(
  appInitialState,

    on(setExibition, (state, { payload }) => {

      const showHidePayload: IShowHideMegaMenu = payload;
      state = {
        ...state,
        showHideMegaMenu: showHidePayload
      }
      return state;
    }),

    on(loadExibition, (state) => {

      state = {
        ...state,
      }

      return state;
    })

  );
