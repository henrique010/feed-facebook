import React, { Component } from 'react';

import Post from '../Post';

import profile from '../../assets/profile1.png';
import profile2 from '../../assets/profile2.png';
import profile3 from '../../assets/profile3.png';
import profile4 from '../../assets/profile4.png';
import profile5 from '../../assets/profile5.png';

import './styles.css';

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: profile,
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: profile2,
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, inclusive ficamos de olho principalmente nos nossos alunos que se destacam no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp."
          },
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: profile3,
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? \n Estou fazendo o bootacamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma idéia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: profile4,
            },
            content: "Também estou fazendo o bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha api dos desafios costruída."
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: profile5,
            },
            content: "Que massa! Estou pensando em me inscrever na próxima turma pra ver qual é desse bootcamp GoStack, dizem que os devs saem de lá com super poderes."
          },
        ]
      },
      {
        id: 3,
        author: {
          name: "Julio Alcantara",
          avatar: profile,
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: profile2,
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, inclusive ficamos de olho principalmente nos nossos alunos que se destacam no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp."
          },
        ]
      },
      {
        id: 4,
        author: {
          name: "Gabriel Lisboa",
          avatar: profile3,
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? \n Estou fazendo o bootacamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma idéia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: profile4,
            },
            content: "Também estou fazendo o bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha api dos desafios costruída."
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: profile5,
            },
            content: "Que massa! Estou pensando em me inscrever na próxima turma pra ver qual é desse bootcamp GoStack, dizem que os devs saem de lá com super poderes."
          },
        ]
      }
    ]
  }

  render(){
    return (
      <div className="post-list-conatiner">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post}/>
        ))}
      </div>
    )
  }
}

export default PostList;