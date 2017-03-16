interface Action {}

export const LOAD_TUTORIAL_REQUEST = '[Tutorial] Load Request';
export const LOAD_TUTORIAL_SUCCESS = '[Tutorial] Load Success';
export const LOAD_TUTORIAL_FAILURE = '[Tutorial] Load Failure';
export const LOAD = '[Tutorial] Load';
export const INIT = '@ngrx/store/init';

export class LoadAction implements Action {
    readonly type = LOAD;

    constructor(public tutorialId: number) { }
}

export class LoadRequestAction implements Action {
    readonly type = LOAD_TUTORIAL_REQUEST;

    constructor(public tutorialId: number) { }
}

export class LoadSuccessAction implements Action {
    readonly type = LOAD_TUTORIAL_SUCCESS;

    constructor(public payload: any) { }
}

export class LoadFailureAction implements Action {
    readonly type = LOAD_TUTORIAL_FAILURE;

    constructor(public payload: any) { }
}

export class InitAction implements Action {
    readonly type = INIT;

    constructor() { }
}

export type Actions
    = LoadRequestAction
    | LoadAction
    | LoadSuccessAction
    | LoadFailureAction
    | InitAction;
