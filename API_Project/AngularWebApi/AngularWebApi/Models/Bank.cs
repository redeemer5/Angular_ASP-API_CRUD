using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWebApi.Models
{
    public class Bank
    {
        [Key]
        public int BankId { get; set; }

        [Column(TypeName="nvarchar(100)")]
        public string BankName { get; set; }
    }
}
