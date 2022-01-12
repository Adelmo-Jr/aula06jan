let alunos=[
    {
	nome:"Diego José",
	idade: 27,
	matricula:"001",
	curso:"Técnico em Informática"
    },
	{
	nome:"Adelmo",
	idade: 28,
	matricula:"002",
	curso:"Técnico em Informática"
    },
	{
	nome:"Lívia",
	idade: 29,
	matricula:"003",
	curso:"Técnico em Comércio"
    },	
];


function exibirAlunos(){
	tAlunos.innerHTML="";
					  
    for(let i = 0; i < alunos.length; i++){
		tAlunos.innerHTML+="<tr>"+ 
					  "<td>"+ alunos[i].nome+"</td>"+
					  "<td>"+ alunos[i].idade+"</td>"+
					  "<td>"+ alunos[i].matricula+"</td>"+
					  "<td>"+ alunos[i].curso+"</td>"+
					  "</tr>";
	}							  
}

