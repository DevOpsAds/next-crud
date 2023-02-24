import { Botao } from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState<"tabela" | "form">("tabela");
  const [nclient, setNclient] = useState(Cliente.vazio);

  const clients = [
    new Cliente("João", 42, "1"),
    new Cliente("Miguel", 4, "2"),
    new Cliente("Lucia", 65, "3"),
  ];

  function editarCliente(cliente: Cliente) {
    console.log("comando selecionada " + cliente.nome);
    setNclient(cliente);
    setView("form");
  }

  function novoClient() {
    console.log("comando novoCliente ");
    setNclient(Cliente.vazio());
    setView("form");
  }

  function excluirCliente(cliente: Cliente) {
    console.log("comando exclusão ativado" + cliente.nome);
  }

  function Alterar(cliente: Cliente) {
    console.log("Alterar cliente " + cliente.nome + cliente.idade);
    setView("tabela");
  }

  {
    if (view === "tabela") {
      return (
        <div
          className="to flex flex-col h-screen items-center
    justify-center bg-purple-500 bg-gradient-to-r to-blue-600">
          <Layout titulo="Cadastro simples">
            <div className="flex justify-end">
              <Botao
                onclick={novoClient}
                className={"mb-4"}
                cor={"bg-green-500"}>
                Novo Cliente
              </Botao>
            </div>

            <Tabela
              clientes={clients}
              clienteSelecionado={editarCliente}
              excluirCliente={excluirCliente}></Tabela>
          </Layout>
        </div>
      );
    } else {
      return (
        <div
          className="to flex flex-col h-screen items-center
    justify-center bg-purple-500 bg-gradient-to-r to-blue-600">
          <Layout titulo="Cadastro simples">
            <Formulario
              alterarCliente={Alterar}
              onclick={() => setView("tabela")}
              cliente={nclient}
            />
          </Layout>
        </div>
      );
    }
  }
}
