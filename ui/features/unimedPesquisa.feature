# language: pt


Funcionalidade: Pesquisar médicos na cidade do Rio de janeiro no site da Unimed
   Como um usuário do site da Unimed, eu gostaria de fazer buscas de acordo com os filtros de especialidade e cidades disponívies

   Contexto: O usuário faz uma pesquisa por um médico
        Dado que eu esteja no portal da unimed
        Quando decido procurar por um médico
        E escolho a especialidade "neurologista" na cidade do "Rio de Janeiro"

    Cenário: Pesquisar uma especialidade médica na cidade do Rio de Janeiro
        Então devo visualizar a listagem dessa expecialidade na cidade

    Cenário: Verificar se a primeira página da pesquisa apresenta especialistas na cidade de São Paulo
        Então a primeira página da pesquisa não deve conter especialista na cidade de São Paulo

    Cenário: Verificar se a segunda página da pesquisa apresenta especialistas na cidade de São Paulo
        Então a segunda página da pesquisa não deve conter especialista na cidade de São Paulo

    Cenário: Verificar se a terceira página da pesquisa apresenta especialistas na cidade de São Paulo  
        Então a terceira página da pesquisa não deve conter especialista na cidade de São Paulo