using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWebApi.Models
{
    public class APIDBContent : DbContext
    {
        public APIDBContent(DbContextOptions<APIDBContent> options) : base(options)
        {

        }

        public DbSet<Bank> Banks { get; set; }
        public DbSet<BankAccount> BankAccounts { get; set; }

    }
}
