import Vue from 'vue'
import jQuery from 'jquery'
import VueTrumbowyg from 'vue-trumbowyg'
import 'trumbowyg/dist/ui/trumbowyg.min.css'
jQuery.trumbowyg.langs.ptBr = {
    viewHTML: 'Ver HTML',

    undo: 'Desfazer',
    redo: 'Refazer',

    formatting: 'Formatar',
    p: 'Parágrafo',
    blockquote: 'Citação',
    code: 'Código',
    header: 'Título',

    bold: 'Negrito',
    italic: 'Itálico',
    strikethrough: 'Tachado',
    underline: 'Sublinhado',

    strong: 'Negrito',
    em: 'Ênfase',
    del: 'Apagar',

    superscript: 'Sobrescrito',
    subscript: 'Subscrito',

    unorderedList: 'Lista não ordenada',
    orderedList: 'Lista ordenada',

    insertImage: 'Inserir imagem',
    insertVideo: 'Inserir vídeo',
    link: 'Link',
    createLink: 'Criar um link',
    unlink: 'Remover link',

    justifyLeft: 'Alinhar a esquerda',
    justifyCenter: 'Centralizar',
    justifyRight: 'Alinhar a direita',
    justifyFull: 'Justificar',

    horizontalRule: 'Inserir separador horizontal',
    removeformat: 'Remover formatação',

    fullscreen: 'Tela cheia',

    close: 'Fechar',

    submit: 'Enviar',
    reset: 'Limpar',

    required: 'Obrigatório',
    description: 'Descrição',
    width: 'Largura',
    title: 'Título',
    text: 'Texto',
    target: 'Alvo',
}
Vue.use(VueTrumbowyg)
