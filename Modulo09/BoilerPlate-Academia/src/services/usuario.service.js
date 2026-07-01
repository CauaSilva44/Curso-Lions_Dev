import bcrypt from "bcrypt";

import UsuarioRepository from "../repositories/usuario.repository.js";

import criarErro from "../utils/CriarErro.js";

function montarUsuarioSeguro(usuario) {
  const usuarioSeguro = usuario.toObject();

  delete usuarioSeguro.senhaHash;

  delete usuarioSeguro.__v;

  return usuarioSeguro;
}

function validarSenha(senha) {
  if (!senha || senha.length < 6) {
    throw criarErro("A senha deve ter pelo menos 6 caracteres.", 400);
  }
}

async function buscarPerfil(idDoUsuario) {
  const usuario = await UsuarioRepository.buscarPorId(idDoUsuario);

  if (!usuario) {
    throw criarErro("Usuário não encontrado.", 404);
  }

  return montarUsuarioSeguro(usuario);
}

async function listarUsuarios() {
  const usuarios = await UsuarioRepository.listarTodos();

  return usuarios.map((usuario) => montarUsuarioSeguro(usuario));
}

async function atualizarPerfil(idDoUsuario, dados = {}) {

  const dadosAtualizados = {};

  if (dados.nome) {
    dadosAtualizados.nome = dados.nome.trim();
  }

  if (dados.senha) {
    validarSenha(dados.senha);


    const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS || 10);


    dadosAtualizados.senhaHash = await bcrypt.hash(dados.senha, saltRounds);
  }

  if (Object.keys(dadosAtualizados).length === 0) {
    throw criarErro("Envie nome e/ou senha para atualizar.", 400);
  }


  const usuarioAtualizado = await UsuarioRepository.atualizarPorId(idDoUsuario, dadosAtualizados);

  if (!usuarioAtualizado) {
    throw criarErro("Usuário não encontrado.", 404);
  }

  return montarUsuarioSeguro(usuarioAtualizado);
}

async function removerMinhaConta(idDoUsuario) {
  const usuarioDeletado = await UsuarioRepository.deletarPorId(idDoUsuario);

  if (!usuarioDeletado) {
    throw criarErro("Usuário não encontrado.", 404);
  }

  return { message: "Conta removida com sucesso." };
}

const UsuarioService = {
  buscarPerfil,
  listarUsuarios,
  atualizarPerfil,
  removerMinhaConta,
};

export default UsuarioService;
